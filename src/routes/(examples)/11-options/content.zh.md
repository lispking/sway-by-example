# Options

在Sway中，Option类型是一种常用的模式匹配类型，它代表一个值可能是有的（Some）或者没有（None）。

在上述代码中，我们定义了一个名为`MyContract`的智能合约，其中包含一个名为`test_func`的函数，该函数返回一个包含三个Option类型的元组，每个Option类型都包含一个布尔值。
- Option类型是Sway中的一种模式匹配类型，它可以包含一个值或者没有值。
- 在智能合约中，Option类型通常用于处理可能存在的值，如一个可能存在的地址或者一个可能存在的数字。
- 在`test_func`函数中，我们创建了三个Option类型的值：`liked`，其值为Some(true)；`disliked`，其值为Some(false)；`none`，其值为None。
- 最后，我们返回了一个包含这三个Option类型值的元组。

这个智能合约的`test_func`函数最终返回了一个包含三个Option类型的元组。这个简单的例子旨在向你展示如何在Sway中使用Option类型来表示可能存在的值。希望这个教程能帮助你更好地理解Sway中的Option类型。
