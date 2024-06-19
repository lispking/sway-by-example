# Solidity Cheatsheet

从`Solidity`到`Sway`的快速交叉参考，包括最常用的项目
- block.timestamp
- msg.sender
- 等等

如果这里缺少了什么，你很可能在[Sway STD库](https://github.com/FuelLabs/sway/tree/master/sway-lib-std)中找到它。


在Sway中，你可以使用多种方法来获取区块链的状态信息和执行复杂的数学运算。

1. **获取区块信息**：
   - Sway提供了一些函数，如`height()`和`timestamp()`，允许智能合约获取当前区块的高度和时间戳。
   - 在`get_blocknumber`和`get_blocktime`函数中，我们演示了如何使用这些函数来获取当前区块的编号和时间戳。
2. **U128整数类型**：
   - Sway中没有内置的`uint128`类型，但可以通过`U128`结构体来表示，它由两个`u64`类型的值组成。
   - 在`get_u128_number`函数中，我们演示了如何使用`U128`结构体来执行加法运算，并将其视为`uint128`类型的值。
   - 值得注意的是，Sway库还提供了完整的U128操作列表，包括指数、加减乘除、平方根等，这些操作可以在Sway的U128文档中找到。

在代码中，定义一个名为`SolidityCheatsheet`的智能合约，其中包含四个函数：`get_blocknumber`、`get_blocktime`、`get_msg_sender`和`get_u128_number`。
- `get_blocknumber`函数返回当前区块的编号。
- `get_blocktime`函数返回当前区块的时间戳。
- `get_msg_sender`函数返回当前消息的发送者。
- `get_u128_number`函数返回两个`U128`类型值的和，这相当于`uint128`类型的值。

这个简单的例子旨在向你展示如何在Sway中获取区块链的状态信息和执行U128整数类型的运算。希望这个教程能帮助你更好地理解Sway中的这些功能。
