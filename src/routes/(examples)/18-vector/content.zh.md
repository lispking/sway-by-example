# Vector

在Sway中，StorageVec和HeapVec是两种用于存储可变长度数组的数据结构。
1. **StorageVec**：
   - StorageVec是一种存储在合约存储中的可变长度数组。
   - 它可以被合约的所有者直接访问和修改，而不需要通过外部调用。
   - StorageVec支持多种操作，包括推入（push）、弹出（pop）、获取（get）、设置（set）、移除（remove）、交换移除（swap_remove）、长度（len）和清空（clear）。
   - 在`storage_vec_examples`函数中，我们演示了如何使用这些操作。
2. **HeapVec**：
   - HeapVec是一种存储在合约堆中的可变长度数组。
   - 它通常用于存储合约外部生成的数据，或者需要与合约外部共享的数据。
   - HeapVec也支持推入（push）、弹出（pop）、移除（remove）、获取（get）、设置（set）、长度（len）等操作。
   - 在`heap_vec_examples`函数中，我们演示了如何使用这些操作。

在代码中，定义一个名为`MyContract`的智能合约，其中包含两个名为`storage_vec_examples`和`heap_vec_examples`的函数，每个函数都演示了如何使用StorageVec和HeapVec。
- 定义一个名为`nums`的StorageVec，它存储了`u64`类型的值。
- 在`storage_vec_examples`函数中，我们演示了如何使用StorageVec的各种操作。
- 在`heap_vec_examples`函数中，我们演示了如何使用HeapVec的各种操作。

这个简单的例子旨在向你展示如何在Sway中使用StorageVec和HeapVec来存储和操作可变长度数组数据。希望这个教程能帮助你更好地理解Sway中的这两种数据结构。
