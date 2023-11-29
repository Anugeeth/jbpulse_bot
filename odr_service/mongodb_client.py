from pymongo import MongoClient

class MongoDBClient:
    def __init__(self, connection_string, database_name):
        self.client = MongoClient(connection_string)
        self.database = self.client[database_name]

# mongo_client = MongoDBClient("your_connection_string", "your_database_name")
