import json

import requests
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update, KeyboardButton, ReplyKeyboardMarkup, WebAppInfo
from telegram.ext import CallbackContext, ContextTypes

from jb import get_query_response
from odr_service.main import init
from redis_conn import RedisConnection

# from translate import prep_message

odr_client = init()
redis_client = RedisConnection().connect()


async def handle_query_response(update: Update, context, query: str, voice_message_url: str,
                                voice_message_language: str):
    response = await get_query_response(query, voice_message_url, voice_message_language)
    if "error" in response:
        await context.bot.send_message(chat_id=update.effective_chat.id,
                                       text='An error has been encountered. Please try again.')
        print(response)
    else:
        answer = response['answer']
        await context.bot.send_message(chat_id=update.effective_chat.id, text=answer)

        if 'audio_output_url' in response:
            audio_output_url = response['audio_output_url']
            if audio_output_url != "":
                audio_request = requests.get(audio_output_url)
                audio_data = audio_request.content
                await context.bot.send_voice(chat_id=update.effective_chat.id,
                                             voice=audio_data)


async def handle_reset(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    buttons = [KeyboardButton("yes"), KeyboardButton("no")]
    button_markup = ReplyKeyboardMarkup([buttons], one_time_keyboard=True, is_persistent=True)

    await context.bot.send_message(chat_id=update.effective_chat.id,
                                   text='Are you sure you want to reset the bot?', reply_markup=button_markup)


async def handle_start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_name = update.message.chat.first_name
    welcome_message = (
        f"Hi {user_name}, Welcome to the <CUSTOM_NAME> bot, "
        "your friendly AI powered bot to answer your queries. "
        "Please be advised not to take these AI generated responses as "
        "standard/correct information. Always consult with the concerned "
        "personnel for availing relevant information."
    )

    await context.bot.send_message(chat_id=update.effective_chat.id,
                                   text=welcome_message)


async def language_handler(update: Update, context: CallbackContext):
    english_button = InlineKeyboardButton('English', callback_data='lang_English')
    hindi_button = InlineKeyboardButton('हिंदी', callback_data='lang_Hindi')
    kannada_button = InlineKeyboardButton('ಕನ್ನಡ', callback_data='lang_Kannada')

    inline_keyboard_buttons = [[english_button], [hindi_button], [kannada_button]]
    reply_markup = InlineKeyboardMarkup(inline_keyboard_buttons)

    await context.bot.send_message(chat_id=update.effective_chat.id, text="Choose a Language:",
                                   reply_markup=reply_markup)


async def handle_odr(update: Update, context: CallbackContext):
    text_message = "Connecting you to ODR providers."

    dispute_categories = ["commercial-dispute", "e-commerce-dispute", "consumer-dispute",
                          "family-dispute", "civil-dispute", "financial-dispute", "employment-dispute"]
    buttons_per_row = 2
    dispute_buttons = [InlineKeyboardButton(category, callback_data=f'search_{category}') for category in
                       dispute_categories]

    # dispute_buttons = [KeyboardButton(category) for category in dispute_categories]  

    dispute_button_rows = [dispute_buttons[i:i + buttons_per_row] for i in
                           range(0, len(dispute_buttons), buttons_per_row)]
    # dispute_reply_markup = KeyboardMarkup(dispute_button_rows, one_time_keyboard=True , is_persistent=True)
    dispute_reply_markup = InlineKeyboardMarkup(dispute_button_rows)

    # lang=context.user_data["language"]
    # text = prep_message(rc=redis_client,text="select_dispute_category", lang="ml")
    text = "select dispute category"
    await context.bot.send_message(chat_id=update.effective_chat.id, text=text,
                                   reply_markup=dispute_reply_markup)


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

    if voice_message_language == "English":
        text_message = "Thank you, allow me to search for the best information to respond to your query."
    elif voice_message_language == "Hindi":
        text_message = "शुक्रीया। मैं आपके प्रश्न के लिए सही जानकरी ढूंढ रही हूं।"
    elif voice_message_language == "Kannada":
        text_message = "ಧನ್ಯವಾದ. ನಾನು ಉತ್ತಮ ಮಾಹಿತಿಯನ್ನು ಕಂಡುಕೊಳ್ಳುವವರೆಗೆ ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ"

    await context.bot.send_message(chat_id=update.effective_chat.id, text=text_message)
    await handle_query_response(update, context, query, voice_message_url, voice_message_language)


async def handle_select_provider_start(update: Update, context: CallbackContext):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Getting provider details")


async def handle_select_confirm(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    buttons = [KeyboardButton("yes"), KeyboardButton("no")]
    button_markup = ReplyKeyboardMarkup([buttons], one_time_keyboard=True, is_persistent=True)

    await context.bot.send_message(chat_id=update.effective_chat.id,
                                   text='Are you sure you want to select this provider?', reply_markup=button_markup)


async def handle_select_provider(update: Update, context: CallbackContext):
    await handle_select_provider_start(update, context)
    callback_query = update.callback_query
    button_data = callback_query.data
    provider_id = button_data[len('select_provider_'):]
    provider_info = redis_client.get(provider_id)
    provider_info = json.loads(provider_info)

    await select_provider(update, provider_info, context)


async def handle_search(update: Update, context: CallbackContext):
    callback_query = update.callback_query
    button_data = callback_query.data
    category = button_data[len('search_'):]
    await connect_to_odr_providers(update, context, category)


async def handle_language_change(update: Update, context: CallbackContext):
    callback_query = update.callback_query
    button_data = callback_query.data
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

    await context.bot.send_message(chat_id=update.effective_chat.id, text=text_message)


async def select_provider(update: Update, provider_info: dict, context):
    provider_details = odr_client.select_provider_and_item(context._user_id, provider_info["provider_id"],
                                                           provider_info["item_id"],
                                                           provider_info["bpp_id"], provider_info["bpp_uri"])

    order = None

    for provider in provider_details["data"]:
        if provider["message"]["order"]["provider"]["id"] == provider_info["provider_id"]:
            order = provider["message"]["order"]
            break

    provider_info = order["provider"]["descriptor"]

    provider_name = provider_info["name"]
    provider_short_desc = provider_info["short_desc"]
    provider_long_desc = provider_info["long_desc"]
    provider_additional_desc_url = provider_info["additional_desc"]["url"]

    price_info = order["quote"]["price"]
    currency = price_info["currency"]
    price_value = price_info["value"]

    breakup_info = order["quote"]["breakup"]
    breakup_details = [{"title": item["title"], "price": item["price"]["value"]} for item in breakup_info]

    response_message = f"Selected Provider:\nName: {provider_name}\nDescription: {provider_long_desc}\n Price: {price_value}"

    buttons = [InlineKeyboardButton(text="Yes",
                                    callback_data=f'billing'), InlineKeyboardButton(text="No",
                                                                                    callback_data=f'billing')]

    reply_markup = InlineKeyboardMarkup([buttons])
    await context.bot.send_message(chat_id=update.effective_chat.id, text=response_message)


#

async def connect_to_odr_providers(update: Update, context: CallbackContext, category: str):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Searching for ODR providers")

    providers_data = odr_client.search_bpp(context._user_id, category=category)

    if not providers_data:
        await context.bot.send_message(chat_id=update.effective_chat.id,
                                       text="No providers found for the selected category.")
        return

    # print(json.dumps(providers_data, indent=4))

    providers_list = []

    for providers in providers_data["data"]:
        for provider in providers["message"]["providers"]:
            item_id = ""
            for item in provider["items"]:
                if item["descriptor"]["code"] == "arbitration-service":
                    item_id = item["id"]

                    providers_list.append(
                        {"name": provider["descriptor"]["name"], "provider_id": provider["id"], "item_id": item_id,
                         "bpp_id": providers["context"]["bpp_id"],
                         "bpp_uri": providers["context"]["bpp_uri"]})

                    break

    for provider in providers_list:
        redis_client.set(f'{context._user_id}_{provider["provider_id"]}', json.dumps(provider))

    buttons = [InlineKeyboardButton(text=provider["name"],
                                    callback_data=f'select_provider_{context._user_id}_{provider["provider_id"]}') for
               provider in providers_list]

    reply_markup = InlineKeyboardMarkup([buttons])

    await context.bot.send_message(chat_id=update.effective_chat.id, text="Choose a Provider:",
                                   reply_markup=reply_markup)


async def handle_billing_form(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Send a message with a button that opens a the web app."""
    await update.message.reply_text(
        "Please press the button below to fill your details.",
        reply_markup=ReplyKeyboardMarkup.from_button(
            KeyboardButton(
                text="Open form",
                web_app=WebAppInfo(url="https://4c0e-106-194-45-76.ngrok-free.app/"),
            )
        ),
    )


async def handle_init_order(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:

    await context.bot.send_message(chat_id=update.effective_chat.id, text="Initializing your order")
    user_data = redis_client.get(context._user_id)
    user_data = json.loads(user_data)
    res = odr_client.init_order(context._user_id, user_data)
    link = ""

    for data in res["data"]:
        try:
            link = data["message"]["order"]["items"][0]["xinput"]["url"]
            break
        except:
            pass

    inline_keyboard_buttons = [InlineKeyboardButton("Open form", url=link)]
    await context.bot.send_message(chat_id=update.effective_chat.id, reply_markup=inline_keyboard_buttons, text="Please fill the form")


async def handle_confirm_start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    buttons = [KeyboardButton("yes"), KeyboardButton("no")]
    button_markup = ReplyKeyboardMarkup([buttons], one_time_keyboard=True, is_persistent=True)

    await context.bot.send_message(chat_id=update.effective_chat.id,
                                   text='Submitted the form?', reply_markup=button_markup)


async def handle_confirm_order(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    res = odr_client.confirm_order(context._user_id)
    print(json.dumps(res, indent=4))

def save_user_data(uid, data):
    redis_client.set(uid, json.dumps(data))
