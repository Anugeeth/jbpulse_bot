import redis

class RedisConnection:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls)
            cls._instance._connection = None
        return cls._instance

    def connect(self, host='localhost', port=6379, db=0):
        """Create and return a Redis connection."""
        if not self._connection:
            self._connection = redis.StrictRedis(
                host=host,
                port=port,
                db=db,
                decode_responses=True  # Decode responses to strings
            )
        return self._connection

    def close(self):
        """Close the Redis connection."""
        if self._connection:
            self._connection.close()
            self._connection = None
