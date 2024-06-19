# Multi-Sig Wallet

In Sway, transaction verification is a critical function for ensuring the validity of transactions, often involving checking if a transaction has been correctly signed by the intended account.
1. **Transaction Witness Data**:
   - In Sway, each transaction includes a witness data (witness data) array.
   - Witness data contains the hash value and signature fields of the transaction.
   - You can use the `tx_witness_data` function to retrieve witness data.
2. **Transaction Witness Count**:
   - The `tx_witnesses_count` function returns the number of witness data.
   - This helps determine the length of the witness data array.
3. **Transaction ID**:
   - The `tx_id` function returns the ID of the current transaction.
   - This can be used to verify the association between witness data and the transaction hash.
4. **Signature Verification**:
   - The `verify_signature` function is used to validate a signature.
   - It first checks if the signature index is within the range of witness data.
   - Then, it uses the elliptic curve cryptography (ECR) algorithm to recover the address corresponding to the signature.
   - Finally, it compares the recovered address with the expected signer's address.
5. **Configuring Signature Count**:
   - In a smart contract, you can configure the required number of signatures.
   - If the number of valid signatures collected during the verification process reaches or exceeds the configured signature count, the transaction is considered valid.

In the provided code, we define a function named `main` that demonstrates how to verify the validity of a transaction.
- We use the `verify_signature` function to validate each potential signature.
- We accumulate the number of successfully verified signatures and compare it with the configured signature count.
- If the number of successfully verified signatures reaches or exceeds the configured signature count, the transaction is considered valid.

This simple example is intended to show you how to use transaction witness data and signature verification in Sway to build a basic transaction verification smart contract. We hope this tutorial helps you better understand the transaction verification functionality in Sway.
