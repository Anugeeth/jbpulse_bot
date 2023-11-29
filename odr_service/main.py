from odr_service.mongodb_client import MongoDBClient
from odr_service.odrclient import ODRApiClient

bap_uri = "https://odr-prod-bap.onrender.com"
bap_id = "ODR-BAP-LITE"


def init():
    mongo_client = MongoDBClient("mongodb+srv://user1:user1@cluster0.q7tv1k8.mongodb.net/?retryWrites=true&w=majority", "agami")
    db = mongo_client.database
    odr_client = ODRApiClient(bap_uri, bap_id ,db)
    return odr_client
