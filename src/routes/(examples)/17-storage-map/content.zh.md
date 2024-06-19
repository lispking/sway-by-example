# Storage Map

在Sway中，StorageMap是一种用于在智能合约中存储键值对的数据结构。它可以被用来存储、检索、更新和删除数据。

1. **基本操作（basic operations）**：
   - StorageMap支持基本的键值对操作，包括插入（insert）、读取（read）、更新（update）和删除（remove）。
   - 在`basic_examples`函数中，我们演示了如何执行这些基本操作。
2. **嵌套（nested）**：
   - StorageMap可以嵌套使用，允许你创建更复杂的数据结构。
   - 在`nested_examples`函数中，我们演示了如何在一个嵌套的StorageMap中执行读取、插入和删除操作。

在代码中，定义一个名为`MyContract`的智能合约，其中包含两个名为`basic_examples`和`nested_examples`的函数，每个函数都执行了StorageMap的基本操作。
- 定义一个名为`balance_of`的StorageMap，它存储了身份（Identity）到`u64`值的映射。
- 定义一个名为`allowance`的StorageMap，它存储了身份到身份（Identity）到`u64`值的映射。
- 使用`ADDR`常量创建了一个`b256`类型的值，用于`allowance`StorageMap中的一个键。

智能合约的`basic_examples`函数演示了如何对`balance_of` StorageMap执行插入、读取、更新和删除操作。`nested_examples`函数演示了如何对`allowance` StorageMap执行读取、插入和删除操作。

这个简单的例子旨在向你展示如何在Sway中使用StorageMap来存储和操作键值对数据。希望这个教程能帮助你更好地理解Sway中的StorageMap。
