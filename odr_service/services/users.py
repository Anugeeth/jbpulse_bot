# user_db.py
from pymongo import MongoClient

def create_user(db, user_id, name, email, phone, address, city):
    users_collection = db["users"]

    user_data = {
        "user_id": user_id,
        "name": name,
        "email": email,
        "phone": phone,
        "address": address,
        "city": city
    }

    users_collection.insert_one(user_data)

def update_user_details(db, user_id, new_details):
    users_collection = db["users"]

    users_collection.update_one(
        {"user_id": user_id},
        {"$set": new_details}
    )

def get_user_details(db, user_id):
    users_collection = db["users"]

    user_details = users_collection.find_one({"user_id": user_id})

    return user_details


