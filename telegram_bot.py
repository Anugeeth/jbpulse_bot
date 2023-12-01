import json
import logging
from enum import Enum, auto

from telegram import Update, Bot, ReplyKeyboardRemove
from telegram import __version__ as TG_VER
from telegram.ext import (
    ApplicationBuilder,
    ContextTypes,
    MessageHandler,
    filters,
    CallbackContext,
    CallbackQueryHandler,
    ConversationHandler, CommandHandler
)

import fsm
from handlers import handle_start, language_handler, query_handler, handle_language_change, handle_search, handle_odr, \
    handle_reset, handle_select_provider, handle_select_provider_start, handle_select_confirm, handle_billing_form, \
    handle_init_order, save_user_data, handle_confirm_start, handle_confirm_order, handle_query_entry


class ChatState(Enum):
    INITIAL = auto()
    START = auto()
    RESET = auto()
    LANGUAGE = auto()
    QUERY = auto()
    SEARCH = auto()
    SELECT = auto()
    SELECT_CONFIRM = auto()
    INIT = auto()
    CONFIRM = auto()

    def __str__(self):
        return self.name


class ChatFSM(fsm.FiniteStateMachineMixin):
    state_machine = {
        ChatState.INITIAL: (ChatState.START,),
        ChatState.START: (ChatState.LANGUAGE,),
        ChatState.RESET: '__all__',
        ChatState.LANGUAGE: '__all__',
        ChatState.QUERY: (ChatState.SEARCH, ChatState.LANGUAGE, ChatState.RESET),
        ChatState.SEARCH: (ChatState.SELECT, ChatState.QUERY, ChatState.LANGUAGE, ChatState.RESET),
        ChatState.SELECT: (ChatState.SELECT_CONFIRM, ChatState.LANGUAGE, ChatState.RESET),
        ChatState.SELECT_CONFIRM: (ChatState.INIT, ChatState.SEARCH, ChatState.LANGUAGE, ChatState.RESET),
        ChatState.INIT: (ChatState.CONFIRM, ChatState.LANGUAGE, ChatState.RESET),
        ChatState.CONFIRM: (ChatState.QUERY, ChatState.LANGUAGE, ChatState.RESET),

    }

    def __init__(self, update, context):
        super().__init__()
        if not context.user_data.get("state"):
            context.user_data["state"] = ChatState.INITIAL

        if not context.user_data.get("state_prev"):
            context.user_data["state_prev"] = None

        self.update = update
        self.context = context
        self.state = self.get_curr_state()

    def get_prev_state(self):
        return self.context.user_data["state_prev"]

    def get_curr_state(self):
        return self.context.user_data["state"]

    def set_curr_state(self, v):
        self.context.user_data["state"] = v

    def set_prev_state(self, v):
        self.context.user_data["state_prev"] = v

    def go_back(self):
        self.change_state(self.get_prev_state())

    def on_change_state(self, previous_state, next_state, **kwargs):
        self.set_curr_state(next_state)
        self.set_prev_state(previous_state)

    async def on_exit_START(self, next_state):
        await handle_start(self.update, self.context)

    async def on_entry_RESET(self, prev_state):
        await handle_reset(self.update, self.context)

    async def on_entry_LANGUAGE(self, prev_state):
        await language_handler(self.update, self.context)

    async def on_exit_LANGUAGE(self, next_state):
        await handle_language_change(self.update, self.context)

    async def on_entry_QUERY(self, prev_state):
        await handle_query_entry(self.update, self.context)

    async def on_entry_SEARCH(self, prev_state):
        await handle_odr(self.update, self.context)

    async def on_exit_SEARCH(self, next_state):
        if next_state == ChatState.SELECT:
            await handle_search(self.update, self.context)

    async def on_exit_SELECT(self, next_state):
        if next_state == ChatState.SELECT_CONFIRM:
            await handle_select_provider(self.update, self.context)

    async def on_entry_SELECT_CONFIRM(self, prev_state):
        await handle_select_confirm(self.update, self.context)

    async def on_entry_INIT(self, prev_state):
        await handle_billing_form(self.update, self.context)

    async def on_exit_INIT(self, next_state):
        if next_state == ChatState.CONFIRM:
            await handle_init_order(self.update, self.context)

    async def on_entry_CONFIRM(self, prev_state):
        if prev_state == ChatState.INIT:
            await handle_confirm_start(self.update, self.context)

    async def on_exit_CONFIRM(self, next_state):
         await handle_confirm_order(self.update, self.context)



USER_INFO = range(1)

bot = Bot(token="6476677118:AAF1SLFv_M1JEh5QhfKcst2M2Ol911Vf5vU")

try:
    from telegram import __version_info__
except ImportError:
    __version_info__ = (0, 0, 0, 0, 0)  # type: ignore[assignment]

if __version_info__ < (20, 0, 0, "alpha", 1):
    raise RuntimeError(
        f"This example is not compatible with your current PTB version {TG_VER}. To view the "
        f"{TG_VER} version of this example, "
        f"visit https://docs.python-telegram-bot.org/en/v{TG_VER}/examples.html"
    )

# Enable logging
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logger = logging.getLogger(__name__)


async def start(update: Update, context: CallbackContext) -> None:
    """Send a message when the command /start is issued."""
    fsm = ChatFSM(update, context)
    state = fsm.current_state()

    if state == ChatState.INITIAL:
        fsm.change_state(ChatState.START)
    else:
        fsm.change_state(ChatState.RESET)

    await response_handler(update, context)


async def response_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    # handles text and voice messages

    fsm = ChatFSM(update, context)
    state = fsm.current_state()

    print(state)

    if state == ChatState.INITIAL:
        # If the state is initial, then we need to start the conversation
        fsm.change_state(ChatState.START)
        fsm.change_state(ChatState.LANGUAGE)

    if state == ChatState.START:
        # Initiating the conversation. Welcome message is sent when getting out of the START state.
        # Language prompt is shown when entering LANGUAGE state

        fsm.change_state(ChatState.LANGUAGE)

    elif state == ChatState.RESET:
        # Resetting the conversation.
        if update.message.text == "yes":
            fsm.change_state(ChatState.INITIAL)
            await start(update, context)
        elif update.message.text == "no":
            # Go to the previous state and cancel resetting
            fsm.go_back()
        else:
            await update.message.reply_text("Please enter yes or no")
    elif state == ChatState.LANGUAGE:
        # Handle text message when the language prompt is shown.

        # Shows the language prompt again
        await fsm.on_entry_LANGUAGE(prev_state=fsm.get_prev_state())

    elif state == ChatState.QUERY:
        # Handle user queries.

        query = update.message.text
        keywords = ["odr", "dispute"]
        if query and any(keyword in query.lower() for keyword in keywords):
            # If the query contains keywords, then we need to search for bpp. Prompt to select the
            # odr type is shown when entering SEARCH state
            fsm.change_state(ChatState.SEARCH)
        else:
            # Answer the users query
            await query_handler(update, context)

    elif state == ChatState.SEARCH:
        # Show the search prompt when text message is received in the same state
        await fsm.on_entry_SEARCH(prev_state=fsm.get_prev_state())


    elif state == ChatState.SELECT_CONFIRM:
        if update.message.text == "yes":
            fsm.change_state(ChatState.INIT)
        elif update.message.text == "no":
            fsm.change_state(ChatState.SEARCH)
        else:
            await update.message.reply_text("Please enter yes or no")

    elif state == ChatState.CONFIRM:
        if update.message.text == "yes":
            fsm.change_state(ChatState.QUERY)
        elif update.message.text == "no":
            await fsm.on_entry_CONFIRM(prev_state=fsm.get_prev_state())
        # Initialize the order. Ask for user details




async def button_callback(update: Update, context: CallbackContext):
    callback_query = update.callback_query
    button_data = callback_query.data

    fsm = ChatFSM(update, context)
    state = fsm.current_state()
    prev_state = fsm.get_prev_state()

    if button_data.startswith('select_provider_'):

        if state == ChatState.SELECT:
            fsm.change_state(ChatState.SELECT_CONFIRM)
        # bpp_details = odr_client.search_bpp(context._user_id, provider_id=provider_id, category="civil-dispute")
        # await select_provider(update, provider_id)
    elif button_data.startswith('search_'):
        if state == ChatState.SEARCH:
            fsm.change_state(ChatState.SELECT)
        else:
            fsm.change_state(ChatState.SEARCH)

    elif button_data.startswith('lang_'):
        if state == ChatState.LANGUAGE:
            if prev_state != ChatState.START:
                fsm.go_back()
            else:
                fsm.change_state(ChatState.QUERY)
        else:
            fsm.change_state(ChatState.LANGUAGE)


async def init_data_handler(update: Update, context: CallbackContext):
    fsm = ChatFSM(update, context)
    state = fsm.current_state()

    if state == ChatState.INIT:
        data = json.loads(update.effective_message.web_app_data.data)
        save_user_data(context._user_id, data)
        fsm.change_state(ChatState.CONFIRM)



def main() -> None:
    application = ApplicationBuilder().bot(bot).build()

    application.add_handler(CommandHandler('start', start))

    application.add_handler(MessageHandler(filters.TEXT | filters.VOICE, response_handler))

    application.add_handler(CallbackQueryHandler(button_callback))

    application.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, init_data_handler))


    application.run_polling()


if __name__ == "__main__":
    main()
