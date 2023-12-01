import asyncio
import json
import logging
from enum import Enum, auto

import redis_conn
import requests
from telegram import Update, Bot, InlineKeyboardButton, InlineKeyboardMarkup
from telegram import __version__ as TG_VER
from telegram.ext import (
    ApplicationBuilder,
    ContextTypes,
    MessageHandler,
    filters,
    CallbackContext,
    CallbackQueryHandler,
    ConversationHandler
)
from handlers import handle_start, language_handler, query_handler, handle_language_change
from pyfsm import fsm


class ChatState(Enum):
    START = auto()
    LANGUAGE = auto()
    QUERY = auto()
    ODR = auto()

    def __str__(self):
        return self.name


class ChatFSM(fsm.FiniteStateMachineMixin):
    state_machine = {
        ChatState.START: (ChatState.LANGUAGE,),
        ChatState.LANGUAGE: '__all__',
        ChatState.QUERY: (ChatState.ODR, ChatState.LANGUAGE),
        ChatState.ODR: None
    }

    def __init__(self, update, context):
        super().__init__()
        if not context.user_data.get("state"):
            context.user_data["state"] = ChatState.START

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

    async def on_exit_START(self):
        await handle_start(self.update, self.context)

    async def on_entry_LANGUAGE(self):
        await language_handler(self.update, self.context)

    async def on_exit_LANGUAGE(self):
        await handle_language_change(self.update, self.context)


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


async def response_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:

    fsm = ChatFSM(update, context)
    state = fsm.current_state()

    if state == ChatState.START:
        fsm.change_state(ChatState.LANGUAGE)
    elif state == ChatState.LANGUAGE:
        await language_handler(update, context)

    if state == ChatState.QUERY:
        await query_handler(update, context)


async def button_callback(update: Update, context: CallbackContext):
    callback_query = update.callback_query
    button_data = callback_query.data

    fsm = ChatFSM(update, context)
    state = fsm.current_state()
    prev_state = fsm.get_prev_state()

    if button_data.startswith('select_provider_'):
        pass
        # bpp_details = odr_client.search_bpp(context._user_id, provider_id=provider_id, category="civil-dispute")
        # await select_provider(update, provider_id)
    elif button_data.startswith('search_'):
        pass
    elif button_data.startswith('lang_'):
        print()
        if state == ChatState.LANGUAGE:
            if prev_state != ChatState.START:
                fsm.go_back()
            else:
                fsm.change_state(ChatState.QUERY)
        else:
            fsm.change_state(ChatState.LANGUAGE)


# remove


async def initialize_order(update, context):
    context.user_data['user_id'] = update.message.from_user.id
    await update.message.reply_text("What's your full name?")

    return USER_INFO


async def user_details_conv(update, context):
    info_fields = ["name", "email", "phone", "address", "city"]
    current_field = context.user_data.get("current_field", 0)

    if current_field < len(info_fields):
        context.user_data[info_fields[current_field]] = update.message.text
        current_field += 1
        context.user_data["current_field"] = current_field

        if current_field < len(info_fields):
            await update.message.reply_text(f"What's your {info_fields[current_field]}?")
        else:
            # store

            context.user_data.clear()
            await update.message.reply_text("Done!")
            return ConversationHandler.END

    return USER_INFO


def main() -> None:
    application = ApplicationBuilder().bot(bot).build()

    application.add_handler(MessageHandler(filters.TEXT | filters.VOICE, response_handler))

    application.add_handler(CallbackQueryHandler(button_callback))

    #     application.add_handler(CommandHandler("start", start))
    #
    #     application.add_handler(CommandHandler('set_language', language_handler))
    #
    # # remove handler when init is done
    #     application.add_handler(CommandHandler("conv", initialize_order))
    #
    #     conversation_handler = ConversationHandler(
    #         entry_points=[MessageHandler(filters.TEXT, initialize_order)],
    #         states={
    #             USER_INFO: [MessageHandler(filters.TEXT, user_details_conv)],
    #         },
    #         fallbacks=[],
    #     )

    # Modify the handlers

    # application.add_handler(conversation_handler)

    application.run_polling()


if __name__ == "__main__":
    main()
