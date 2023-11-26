from cryptography.hazmat.primitives.asymmetric import ed25519
from cryptography.hazmat.primitives import serialization
import base64
import os

def generate_ed25519_key_pair():
    # Generate Ed25519 key pair
    private_key = ed25519.Ed25519PrivateKey.generate()

    # Get the public key
    public_key = private_key.public_key()

    # Serialize private and public keys
    private_key_bytes = private_key.private_bytes(
        encoding=serialization.Encoding.Raw,
        format=serialization.PrivateFormat.Raw,
        encryption_algorithm=serialization.NoEncryption()
    )

    public_key_bytes = public_key.public_bytes(
        encoding=serialization.Encoding.Raw,
        format=serialization.PublicFormat.Raw
    )

    # Encode to Base64
    private_key_base64 = base64.b64encode(private_key_bytes).decode('utf-8')
    public_key_base64 = base64.b64encode(public_key_bytes).decode('utf-8')

    return private_key_base64, public_key_base64

if __name__ == "__main__":
    private_key, public_key = generate_ed25519_key_pair()

    print("\nPrivate:", private_key)
    print("\nPublic:", public_key)




