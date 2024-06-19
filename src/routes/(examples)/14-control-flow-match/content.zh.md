# Control Flow - Match Statement

在Sway中，控制流、变量赋值和枚举是构建智能合约时经常使用的重要概念。

1. **控制流（Control Flow）**：
   - 使用`match`表达式可以轻松实现条件判断和控制流。
   - `match`表达式允许你根据一个值匹配不同的代码块。
   - 在`test_function`函数中，我们使用`match`来判断`x`的值，并执行相应的操作。
2. **变量赋值（Assign Variable）**：
   - 在Sway中，你可以使用`match`表达式来赋值变量。
   - 你可以为每个匹配条件提供一个值，当条件匹配时，相应的值将被赋给变量。
   - 在`test_function`函数中，我们使用`match`来根据`x`的值赋值给变量`res`。
3. **枚举（Enum）**：
   - `Option`类型是一种枚举，它包含两个可能的值：`Some`和`None`。
   - 在`test_function`函数中，我们使用`match`来处理`Option`类型的`y`变量。
   - 如果`y`是`Some`，我们返回其值加1；如果`y`是`None`，我们返回0。

在代码中，定义一个名为`MyContract`的智能合约，其中包含一个名为`test_function`的函数，该函数接受两个参数：一个`u64`类型的`x`和一个`Option<u64>`类型的`y`。
- 使用`match`表达式来判断`x`的值，并执行相应的操作。
- 使用`match`表达式来根据`x`的值赋值给变量`res`。
- 使用`match`表达式来处理`y`变量，并根据其值返回相应的结果。

这个智能合约的`test_function`函数最终返回一个`u64`类型的值。这个简单的例子旨在向你展示如何在Sway中使用控制流、变量赋值和枚举来构建智能合约。希望这个教程能帮助你更好地理解Sway中的这些概念。
