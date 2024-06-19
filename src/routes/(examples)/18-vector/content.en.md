# Vector

In Sway, StorageVec and HeapVec are two data structures used to store mutable arrays.
1. **StorageVec**:
   - StorageVec is a mutable array stored within the contract storage.
   - It can be accessed and modified directly by the contract owner without requiring external calls.
   - StorageVec supports various operations, including push, pop, get, set, remove, swap_remove, len, and clear.
   - In the `storage_vec_examples` function, we demonstrate how to use these operations.
2. **HeapVec**:
   - HeapVec is a mutable array stored within the contract heap.
   - It is typically used to store data generated outside the contract or data that needs to be shared with the contract's external environment.
   - HeapVec also supports operations such as push, pop, remove, get, set, and len.
   - In the `heap_vec_examples` function, we demonstrate how to use these operations.

In the provided code, we define a smart contract named `MyContract` with two functions named `storage_vec_examples` and `heap_vec_examples`, each demonstrating how to use StorageVec and HeapVec.
- We define a StorageVec named `nums`, which stores `u64` type values.
- In the `storage_vec_examples` function, we demonstrate how to use various StorageVec operations.
- In the `heap_vec_examples` function, we demonstrate how to use various HeapVec operations.

This simple example is intended to show you how to use StorageVec and HeapVec in Sway to store and manipulate mutable arrays. We hope this tutorial helps you better understand these two data structures in Sway.
