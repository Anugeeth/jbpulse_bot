import logging
import re
import urllib
from typing import Union, TypedDict
import requests 
import json
from telegram import __version__ as TG_VER
from telegram import Update, Bot, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
    CallbackContext,
    CallbackQueryHandler,
    ConversationHandler
)
from jb import get_query_response
from odr_service.main import init

odr_client = init()

USER_INFO = range(1)

bot = Bot(token="6567325826:AAGKVgUk8o424z4IMnitfwLTbqbKtNN_Qjo")

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



async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_name = update.message.chat.first_name
    welcome_message = (
        f"Hi {user_name}, Welcome to the <CUSTOM_NAME> bot, "
        "your friendly AI powered bot to answer your queries. "
        "Please be advised not to take these AI generated responses as "
        "standard/correct information. Always consult with the concerned "
        "personnel for availing relevant information."
    )
    await bot.send_message(chat_id=update.effective_chat.id,
                           text=welcome_message)
    await relay_handler(update, context)


async def relay_handler(update: Update, context: CallbackContext):
    await language_handler(update, context)


async def language_handler(update: Update, context: CallbackContext):
    english_button = InlineKeyboardButton('English', callback_data='lang_English')
    hindi_button = InlineKeyboardButton('हिंदी', callback_data='lang_Hindi')
    kannada_button = InlineKeyboardButton('ಕನ್ನಡ', callback_data='lang_Kannada')

    inline_keyboard_buttons = [[english_button], [hindi_button], [kannada_button]]
    reply_markup = InlineKeyboardMarkup(inline_keyboard_buttons)

    await bot.send_message(chat_id=update.effective_chat.id, text="Choose a Language:", reply_markup=reply_markup)


async def preferred_language_callback(update: Update, context: CallbackContext):
    callback_query = update.callback_query
    preferred_language = callback_query.data.lstrip('lang_')
    context.user_data['language'] = preferred_language

    text_message = ""
    if preferred_language == "English":
        text_message = "You have chosen English. \nPlease give your query now"
    elif preferred_language == "Hindi":
        text_message = "आपने हिंदी चुना है। \nआप अपना सवाल अब हिंदी में पूछ सकते हैं।"
    elif preferred_language == "Kannada":
        text_message = "ಕನ್ನಡ ಆಯ್ಕೆ ಮಾಡಿಕೊಂಡಿದ್ದೀರಿ. \nದಯವಿಟ್ಟು ಈಗ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ನೀಡಿ"

    await bot.send_message(chat_id=update.effective_chat.id, text=text_message)



async def response_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await query_handler(update, context)


async def query_handler(update: Update, context: CallbackContext):
    voice_message_language = context.user_data.get('language')
    voice_message = None
    query = None

    if update.message.text:
        query = update.message.text
    elif update.message.voice:
        voice_message = update.message.voice

    voice_message_url = None
    if voice_message is not None:
        voice_file = await voice_message.get_file()
        voice_message_url = voice_file.file_path

    text_message = ""

    keywords = ["odr", "dispute"]
    if query and any(keyword in query.lower() for keyword in keywords):
        text_message = "Connecting you to ODR providers."

        dispute_categories = ["commercial-dispute", "e-commerce-dispute", "consumer-dispute", 
                              "family-dispute", "civil-dispute", "financial-dispute", "employment-dispute"]
        buttons_per_row = 2
        dispute_buttons = [InlineKeyboardButton(category, callback_data=f'search_{category}') for category in dispute_categories]
        
        dispute_button_rows = [dispute_buttons[i:i + buttons_per_row] for i in range(0, len(dispute_buttons), buttons_per_row)]
        dispute_reply_markup = InlineKeyboardMarkup(dispute_button_rows)

        await bot.send_message(chat_id=update.effective_chat.id, text="Choose a Dispute Category:", reply_markup=dispute_reply_markup)

    
    else:
        if voice_message_language == "English":
            text_message = "Thank you, allow me to search for the best information to respond to your query."
        elif voice_message_language == "Hindi":
            text_message = "शुक्रीया। मैं आपके प्रश्न के लिए सही जानकरी ढूंढ रही हूं।"
        elif voice_message_language == "Kannada":
            text_message = "ಧನ್ಯವಾದ. ನಾನು ಉತ್ತಮ ಮಾಹಿತಿಯನ್ನು ಕಂಡುಕೊಳ್ಳುವವರೆಗೆ ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ"

        await bot.send_message(chat_id=update.effective_chat.id, text=text_message)
        await handle_query_response(update, query, voice_message_url, voice_message_language)

async def button_callback(update: Update, context: CallbackContext):
    callback_query = update.callback_query
    button_data = callback_query.data
    
    if button_data.startswith('select_provider_'):
        provider_id = button_data[len('select_provider_'):]
        bpp_details = odr_client.search_bpp(context._user_id, provider_id= provider_id,category= "civil-dispute" )
        # await select_provider(update, provider_id)
    else:
    
        if button_data.startswith('search_'):
            category = button_data[len('search_'):]
            await connect_to_odr_providers(update, context, category)
        else:
            preferred_language = button_data.lstrip('lang_')
            context.user_data['language'] = preferred_language
            text_message = f"You have chosen {preferred_language}. \nPlease give your query now"
            await bot.send_message(chat_id=update.effective_chat.id, text=text_message)


# remove

async def select_provider(update: Update, provider_info: dict):
    provider_details = odr_client.select_provider_and_item(provider_info.provider_id, provider_info.item_id, provider_info.bpp_id , provider_info.bpp_url)
    provider_info = provider_details.data["data"][0]["message"]["order"]["provider"]["descriptor"]

    provider_name = provider_info["name"]
    provider_short_desc = provider_info["short_desc"]
    provider_long_desc = provider_info["long_desc"]
    provider_additional_desc_url = provider_info["additional_desc"]["url"]

    price_info = provider_details.data["data"][0]["message"]["order"]["quote"]["price"]
    currency = price_info["currency"]
    price_value = price_info["value"]

    breakup_info = provider_details.data["data"][0]["message"]["order"]["quote"]["breakup"]
    breakup_details = [{"title": item["title"], "price": item["price"]["value"]} for item in breakup_info]

    response_message = f"Selected Provider:\nName: {provider_name}\nDescription: {provider_long_desc}\n Price: {price_value}"
    
    await bot.send_message(chat_id=update.effective_chat.id, text=response_message)


async def connect_to_odr_providers(update: Update, context : CallbackContext ,category: str ):
    await bot.send_message(chat_id=update.effective_chat.id,text="Searching for ODR providers")

    providers_data = odr_client.search_bpp( context._user_id,category=category )

    if not providers_data:
        await bot.send_message(chat_id=update.effective_chat.id, text="No providers found for the selected category.")
        return

    # print(json.dumps(providers_data, indent=4))

    buttons = [InlineKeyboardButton(provider["descriptor"]["name"], callback_data=f'select_provider_{provider["id"]}') for provider in providers_data["data"][0]["message"]["provider"]]
    reply_markup = InlineKeyboardMarkup([buttons])

    await bot.send_message(chat_id=update.effective_chat.id, text="Choose a Provider:", reply_markup=reply_markup)



async def handle_query_response(update: Update, query: str, voice_message_url: str, voice_message_language: str):
    response = await get_query_response(query, voice_message_url, voice_message_language)
    if "error" in response:
        await bot.send_message(chat_id=update.effective_chat.id,
                               text='An error has been encountered. Please try again.')
        print(response)
    else:
        answer = response['answer']
        await bot.send_message(chat_id=update.effective_chat.id, text=answer)

        if 'audio_output_url' in response:
            audio_output_url = response['audio_output_url']
            if audio_output_url != "":
                audio_request = requests.get(audio_output_url)
                audio_data = audio_request.content
                await bot.send_voice(chat_id=update.effective_chat.id,
                                     voice=audio_data)


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

    application.add_handler(CommandHandler("start", start))

    application.add_handler(CommandHandler('set_language', language_handler))

# remove handler when init is done
    application.add_handler(CommandHandler("conv", initialize_order))

    conversation_handler = ConversationHandler(
        entry_points=[MessageHandler(filters.TEXT, initialize_order)],
        states={
            USER_INFO: [MessageHandler(filters.TEXT, user_details_conv)],
        },
        fallbacks=[],
    )


    # Modify the handlers
    application.add_handler(CallbackQueryHandler(button_callback))

    application.add_handler(CallbackQueryHandler(preferred_language_callback, pattern=r'lang_\w*'))


    application.add_handler(conversation_handler)


    application.add_handler(MessageHandler(filters.TEXT | filters.VOICE, response_handler))

    application.run_polling()

if __name__ == "__main__":
    main()
