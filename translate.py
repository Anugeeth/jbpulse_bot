

# from googletrans import Translator
# from redis import StrictRedis

# def translate_strings(rc,original_strings: dict, target_language:str):
    

#     translator = Translator()

#     translated_strings = {}
#     for action, string in original_strings.items():
#         translation = translator.translate(string, dest=target_language).text
#         translated_strings[action] = translation

#     rc.set(target_language, original_strings)

#     return translated_strings



# def prep_message(rc: StrictRedis , text:str , lang: str) -> str:
#     lang_obj = rc.get(lang)
#     return lang_obj[text]