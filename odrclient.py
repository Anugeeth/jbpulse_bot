import requests
import json
import uuid

class ODRApiClient:
    def __init__(self, bap_uri, bap_id, domain="online-dispute-resolution:0.1.0"):
        self.bap_uri = bap_uri
        self.bap_id = bap_id
        self.domain = domain

    def _make_request(self, endpoint, payload):
        url = f"{self.bap_uri}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        response = requests.post(url, data=json.dumps(payload), headers=headers)

        if response.status_code == 200:
            return json.loads(response.text)
        else:
            return {"error": f"Error {response.status_code}: {response.text}"}

    def search_bpp(self, code):
        endpoint = "search"
        transaction_id = str(uuid.uuid4())
        message_id = str(uuid.uuid4())

        payload = {
            "context": {
                "domain": self.domain,
                "location": {
                    "country": {"code": "IND"}
                },
                "transaction_id": transaction_id,
                "message_id": message_id,
                "action": "search",
                "timestamp": "2023-05-25T05:23:03.443Z",
                "version": "1.1.0",
                "bap_uri": self.bap_uri,
                "bap_id": self.bap_id,
                "ttl": "PT10M"
            },
            "message": {
                "intent": {
                    "category": {
                        "descriptor": {"code": "arbitration-service"}
                    },
                    "item": {
                        "descriptor": {"code": code}
                    }
                }
            }
        }

        return self._make_request(endpoint, payload)

    def select_provider_and_item(self, provider_id, item_id, bpp_id , bpp_url):
        endpoint = "select"
        transaction_id = str(uuid.uuid4())
        message_id = str(uuid.uuid4())

        payload = {
            "context": {
                "domain": self.domain,
                "location": {
                    "country": {"code": "IND"}
                },
                "transaction_id": transaction_id,
                "message_id": message_id,
                "action": "select",
                "timestamp": "2023-05-25T05:23:03.443Z",
                "version": "1.1.0",
                "bap_uri": self.bap_uri,
                "bap_id": self.bap_id,
                "bpp_id": bpp_id,
                "bpp_url": bpp_url,
                "ttl": "PT10M"
            },
            "message": {
                "order": {
                    "provider": {"id": provider_id},
                    "items": [{"id": item_id}]
                }
            }
        }

        return self._make_request(endpoint, payload)

    def init_order(self, provider_id, item_id, customer_details, bpp_id, bpp_url):
        endpoint = "init"
        transaction_id = str(uuid.uuid4())
        message_id = str(uuid.uuid4())

        payload = {
            "context": {
                "domain": self.domain,
                "location": {
                    "country": {"code": "IND"}
                },
                "transaction_id": transaction_id,
                "message_id": message_id,
                "action": "init",
                "timestamp": "2023-05-25T05:23:03.443Z",
                "version": "1.1.0",
                "bap_uri": self.bap_uri,
                "bap_id": self.bap_id,
                "bpp_id": bpp_id,
                "bpp_url": bpp_url,
                "ttl": "PT10M"
            },
            "message": {
                "order": {
                    "provider": {"id": provider_id},
                    "items": [
                        {
                            "id": item_id,
                            "xinput": {
                                "form_response": {
                                    "status": True,
                                    "submission_id": str(uuid.uuid4())
                                }
                            }
                        }
                    ],
                    "billing": {
                        "name": customer_details["name"],
                        "email": customer_details["email"],
                        "address": customer_details["address"],
                        "city": {"name": customer_details["city"]}
                    },
                    "fulfillments": [
                        {
                            "customer": {
                                "person": {"name": customer_details["name"]},
                                "contact": {
                                    "phone": customer_details["phone"],
                                    "email": customer_details["email"]
                                }
                            }
                        }
                    ],
                    "tags": [
                        {
                            "descriptor": {"name": "consent-form"}
                        }
                    ]
                }
            }
        }

        return self._make_request(endpoint, payload)


# Example usage:
bap_uri = "https://odr-prod-bap.onrender.com"
bap_id = "ODR-BAP-LITE"
odr_api = ODRApiClient(bap_uri, bap_id)

# Search BPP
search_result = odr_api.search_bpp("your_code")
print(search_result)

# Select Provider and Item
select_result = odr_api.select_provider_and_item("ODR001", "ALPHA-ARB-01")
print(select_result)

# Init Order
customer_details = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "address": "21A, ABC Appartments, HSR Layout, Bengaluru",
    "city": "Bengaluru",
    "phone": "+91-9999999999"
}
init_result = odr_api.init_order("ODR001", "ALPHA-ARB-01", customer_details)
print(init_result)
