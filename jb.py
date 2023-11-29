import re
import urllib
import requests 
import json
from typing import Union, TypedDict


uuid_number = "46715a86-0a95-11ee-910e-912a90a99823"


class ApiResponse(TypedDict):
    query: str
    answer: str
    source_text: str


class ApiError(TypedDict):
    error: Union[str, requests.exceptions.RequestException]

async def get_query_response(query: str, voice_message_url: str, voice_message_language: str) -> Union[ApiResponse, ApiError]:
    try:
        if voice_message_url is None:
            if voice_message_language == "English":
                query_engine_route = 'query-with-langchain-gpt4'
                params = {
                    'uuid_number': uuid_number,
                    'query_string': query,
                }

                url = f'https://api.jugalbandi.ai/{query_engine_route}?' \
                      + urllib.parse.urlencode(params)
            else:
                params = {
                    'uuid_number': uuid_number,
                    'query_text': query,
                    'audio_url': "",
                    'input_language': voice_message_language,
                    'output_format': 'Text',
                }
                url = 'https://api.jugalbandi.ai/query-using-voice-gpt4?' \
                      + urllib.parse.urlencode(params)
        else:
            params = {
                'uuid_number': uuid_number,
                'audio_url': voice_message_url,
                'input_language': voice_message_language,
                'output_format': 'Voice',
            }
            url = 'https://api.jugalbandi.ai/query-using-voice-gpt4?' \
                  + urllib.parse.urlencode(params)

        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        return {'error': e}
    except (KeyError, ValueError):
        return {'error': 'Invalid response received from API'}