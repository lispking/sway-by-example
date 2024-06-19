# Storage Map

In Sway, StorageMap is a data structure used to store key-value pairs within smart contracts. It can be used to store, retrieve, update, and delete data.
1. **Basic Operations (basic operations)**:
   - StorageMap supports basic key-value operations, including insertion (insert), reading (read), updating (update), and removal (remove).
   - In the `basic_examples` function, we demonstrate how to perform these basic operations.
2. **Nested (nested)**:
   - StorageMap can be nested, allowing you to create more complex data structures.
   - In the `nested_examples` function, we demonstrate how to perform read, insert, and remove operations on a nested StorageMap.

In the provided code, we define a smart contract named `MyContract` with two functions named `basic_examples` and `nested_examples`, each performing operations on StorageMap.
- We define a StorageMap named `balance_of`, which stores a mapping from `Identity` to `u64` values.
- We define a StorageMap named `allowance`, which stores a mapping from a pair of `Identity` to `u64` values.
- We use the `ADDR` constant to create a `b256` value, which is used as a key in the `allowance` StorageMap.

The `basic_examples` function demonstrates how to perform insert, read, update, and remove operations on the `balance_of` StorageMap. The `nested_examples` function demonstrates how to perform read, insert, and remove operations on the `allowance` StorageMap.

This simple example is intended to show you how to use StorageMap in Sway to store and manipulate key-value pair data. We hope this tutorial helps you better understand StorageMap in Sway.
