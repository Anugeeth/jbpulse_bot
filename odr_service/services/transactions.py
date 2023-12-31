from datetime import datetime
import uuid
import pymongo

def create_transaction_record(db, user_id, state, category):
    transaction_id = str(uuid.uuid4())
    timestamp = datetime.now()

    record = {
        "user_id": user_id,
        "transaction_id": transaction_id,
        "bap_id": "bap_id",
        "bpp_uri": "bpp_uri",
        "provider_id": "provider_id",
        "item_id": "item_id",
        "state": state,
        "timestamp": timestamp,
        "category": category
    }

    result = db.transactions.insert_one(record)
    return result.inserted_id


def update_transaction(db, transaction_id, bpp_id, bpp_uri, provider_id: str, service_id:str):
    db.transactions.update_one(
        {"transaction_id": transaction_id},
        {"$set": {
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri,
            "provider_id": provider_id,
            "service_id": service_id
        }}
    )

def update_transaction_state(db, transaction_id, new_state):
    db.transactions.update_one(
        {"transaction_id": transaction_id},
        {"$set": {"state": new_state}}
    )

def get_transaction_details(db, user_id):
    return db.transactions.find_one({"user_id": user_id})

def get_user_state(db, user_id):
    result = db.transactions.find_one({"user_id": user_id},sort=[("timestamp", pymongo.DESCENDING)])
    return result

def update_user_state(db,user_id, state, transaction_id):

    db.transactions.update_one(
        {"user_id": user_id, "state": state},
        {"$set": {"transaction_id": transaction_id}},
        upsert=True
    )
