# Control Flow - While Loop

在Sway中，while循环、continue和break是控制循环结构的关键概念。

1. **while循环（While Loops）**：
   - while循环允许你重复执行一段代码，直到某个条件不再为真。
   - 在`example_1`函数中，我们使用while循环来计算从1到5的整数之和。
2. **continue和break**：
   - continue语句允许你跳过当前循环的剩余部分，并开始下一次循环。
   - break语句允许你完全跳出循环，不再执行循环的剩余部分。
   - 在`example_2`函数中，我们使用continue语句来跳过偶数，只计算奇数。
   - 在`example_3`函数中，我们使用break语句来在达到特定条件时退出循环。

在代码中，定义一个名为`MyContract`的智能合约，其中包含三个名为`example_1`、`example_2`和`example_3`的函数，每个函数都返回一个`u64`类型的值。
- `example_1`函数使用while循环计算从1到5的整数之和。
- `example_2`函数使用while循环和continue语句计算从1到5的奇数之和。
- `example_3`函数使用while循环和break语句计算从1到3的整数之和。

这个智能合约的`example_1`、`example_2`和`example_3`函数分别返回15、9和6。这个简单的例子旨在向你展示如何在Sway中使用while循环、continue和break来控制循环结构。希望这个教程能帮助你更好地理解Sway中的这些控制结构。
