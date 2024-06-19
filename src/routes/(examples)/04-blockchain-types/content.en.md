# Blockchain Types

In Sway, addresses, contract IDs, and identities are key concepts used to handle different entities on the blockchain.

1. **Address**:
   - An address is an identifier used on the blockchain to denote an Externally Owned Account (EOA).
   - In Sway, an address can be created by converting a 256-bit value into an `Address` type.
   - An address can also be converted back into a 256-bit value.
2. **Contract ID**:
   - A contract ID is a unique identifier used on the blockchain to denote a smart contract.
   - Similar to an address, a contract ID can be created by converting a 256-bit value into a `ContractId` type.
   - A contract ID can also be converted back into a 256-bit value.
3. **Identity**:
   - An identity is an enum type that can represent either an address or a contract ID.
   - You can create an identity using `Identity::Address` or `Identity::ContractId`.
   - The identity type can be used in pattern matching to perform different actions based on its specific type.

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that returns a value of type `Identity`.
- create an address `addr` and convert it into a `b256` type value.
- create a contract ID `my_contract_id` and convert it into a `b256` type value.
- create an identity `my_id` that is an identity of the address type.
- use pattern matching to check the specific type of `my_id` and perform different actions based on its type.

The `test_func` function of this smart contract ultimately returns a value of the identity type. This simple example is intended to show you how to use addresses, contract IDs, and identity types in Sway. We hope this tutorial helps you better understand these key concepts in Sway.
