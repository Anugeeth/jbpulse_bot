import requests 
import json

def searchBAP(code) : 
    domain = "online-dispute-resolution:0.1.0"
    bap_uri = "https://odr-prod-bap.onrender.com"
    bap_id = "ODR-BAP-LITE"

    url = "https://odr-prod-bap.onrender.com/search"

    payload = {
        "context": {
            "domain": domain,
            "location": {
                "country": {
                    "code": "IND"
                }
            },
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "$bb579fb8-cb82-4824-be12-fcbc405b6608",
            "action": "search",
            "timestamp": "2023-05-25T05:23:03.443Z",
            "version": "1.1.0",
            "bap_uri": bap_uri,
            "bap_id": bap_id,
            "ttl": "PT10M"
        },
        "message": {
            "intent": {
                "category": {
                    "descriptor": {
                        "code": "arbitration-service"
                    }
                },
                 "item": {
                    "descriptor": {
                    "code": code
                    }
                }
            }
        }
    }

    json_payload = json.dumps(payload)

    response = requests.post(url, data=json_payload, headers={'Content-Type': 'application/json'})

    print("Response Code:", response.status_code)


    responseJson = json.loads(response.text)
    messages = []

    providers_data = {}  

    for entry in responseJson.get("data", []):
        if "message" in entry and "provider" in entry["message"]:
            for provider_info in entry["message"]["provider"]:
                provider_id = provider_info["id"]
                provider_name = provider_info["descriptor"]["name"]
                providers_data[provider_id] = provider_name

    for provider_id, provider_name in providers_data.items():
        messages.append(provider_name)

    return providers_data



