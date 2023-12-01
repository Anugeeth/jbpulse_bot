import requests
import json
import uuid
from datetime import datetime
from odr_service.utils.serializer import json_serial
from odr_service.services.users import *
from odr_service.services.transactions import *

class ODRApiClient:
    def __init__(self, bap_uri, bap_id, db ,domain="online-dispute-resolution:0.1.0"):
        self.bap_uri = bap_uri
        self.bap_id = bap_id
        self.domain = domain
        self.db = db

    def _make_context(self, action ,transaction_id, bpp_id = None, bpp_uri = None):
        return {
                "domain": self.domain,
                "location": {
                    "country": {"code": "IND"}
                },
                "transaction_id": transaction_id,
                "message_id": "",
                "action": action,
                "timestamp": datetime.now().isoformat(),
                "version": "1.1.0",
                "bap_uri": self.bap_uri,
                "bap_id": self.bap_id,
                "bpp_id": bpp_id if bpp_id else None,
                "bpp_url": bpp_uri if bpp_uri else None,
                "ttl": "PT10M"
        }

    def _make_request(self, endpoint, payload):
        url = f"{self.bap_uri}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        response = requests.post(url, data=json.dumps(payload), headers=headers)
        if response.status_code == 200:
            return json.loads(response.text)
        else:
            return {"error": f"Error {response.status_code}: {response.text}"}



    def search_bpp(self , user_id, category=None , provider_id = None ):
        endpoint = "search"
        transaction_id = ""

        existing_transaction = get_user_state(self.db ,user_id)

        if existing_transaction is None:
            create_transaction_record(self.db ,user_id, "SEARCH", category)
        elif existing_transaction["state"] == "SEARCH":
            transaction_id = existing_transaction["transaction_id"]


        payload = {
            "context": self._make_context(action = endpoint , transaction_id= transaction_id),
            "message": {
                "intent": {
                    "category": {
                        "descriptor": {"code": "arbitration-service"}
                    },
                    "item": {
                        "descriptor": {
                            "code": category if category else None
                    }},
                    "provider": { "id": provider_id } if provider_id else None
                }
            }
        }

        return self._make_request(endpoint, payload)

    def select_provider_and_item(self, user_id, provider_id, item_id, bpp_id , bpp_uri):
        endpoint = "select"
        transaction_id=""


        last_search_transaction = get_user_state(self.db, user_id)


        if last_search_transaction is None:
            return {"error": "No search transaction found"}


        if last_search_transaction["state"] == "SEARCH":
            transaction_id = last_search_transaction["transaction_id"]
            update_user_state(self.db ,user_id, transaction_id, "SELECT")


        payload = {
            "context": self._make_context(action = endpoint , transaction_id = transaction_id , bpp_id=bpp_id , bpp_uri= bpp_uri),
            "message": {
                "order": {
                    "provider": {"id": provider_id},
                    "items": [{"id": item_id}]
                }
            }
        }

        select_res =  self._make_request(endpoint, payload)

        create_transaction_record()

    def init_order(self, provider_id, item_id, customer_details, bpp_id, bpp_uri):
        endpoint = "init"
        transaction_id = str(uuid.uuid4())

        payload = {
            "context": self._make_context(action = endpoint , transaction_id = transaction_id , bpp_id=bpp_id , bpp_uri= bpp_uri),
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

    def confirm_order(self, user_id, provider_id, item_id, customer_details, submission_id, bpp_id, bpp_uri):
        endpoint = "confirm"

        existing_transaction = get_user_state(self.db, user_id)

        if existing_transaction["state"] == "CONFIRM":
            return {"error": "User is already in CONFIRM state"}

        transaction_id = existing_transaction["transaction_id"]

        payload = {
            "context": self._make_context(action = endpoint , transaction_id = transaction_id , bpp_id=bpp_id , bpp_uri= bpp_uri),
            "message": {
                "order": {
                    "provider": {"id": provider_id},
                    "items": [
                        {
                            "id": item_id,
                            "xinput": {
                                "form_response": {
                                    "status": True,
                                    "submission_id": submission_id
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
                    "payments": [
                        {
                            "params": {
                                "amount": "12000",
                                "currency": "INR"
                            },
                            "status": "PAID"
                        }
                    ]
                }
            }
        }

        update_user_state(self.db, user_id, transaction_id, "CONFIRM")
        return self._make_request(endpoint, payload)
