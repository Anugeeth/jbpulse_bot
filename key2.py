from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import ed25519
import base64

# Generate a new Ed25519 private key
private_key = ed25519.Ed25519PrivateKey.generate()

# Serialize the private key to PEM format
private_key_pem = private_key.private_bytes(
    encoding=serialization.Encoding.Raw,
    format=serialization.PrivateFormat.Raw,
    encryption_algorithm=serialization.NoEncryption()
)

# Serialize the corresponding public key to PEM format
public_key = private_key.public_key()
public_key_pem = public_key.public_bytes(
    encoding=serialization.Encoding.Raw,
    format=serialization.PublicFormat.Raw
)

# Convert to base64
private_key_base64 = base64.b64encode(private_key_pem).decode('utf-8')
public_key_base64 = base64.b64encode(public_key_pem).decode('utf-8')

# Print or save the base64 encoded private and public keys
print("Base64 Encoded Private Key:")
print(private_key_base64)

print("\nBase64 Encoded Public Key:")
print(public_key_base64)
