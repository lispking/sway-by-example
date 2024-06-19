# Control Flow - If Statements

In Sway, if-else statements and if let are key control structures used for conditional judgments and code branching.
1. **if-else Statements**:
   - `if-else` statements allow you to execute different code blocks based on a certain condition.
   - You can use `else if` to add additional conditional checks, which can avoid duplicating code blocks.
   - If no condition is met, the `else` block will be executed.
2. **if let**:
   - `if let` is a pattern matching expression in Sway that allows you to destructure a value based on a condition.
   - It is often used with `Option` or `Result` types to simplify error handling and value parsing.

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that accepts a `u64` type parameter and returns a `u64` type value.
- We use `if-else` statements to check the value of the parameter `x` and perform different operations based on its size.
- We use `if let` to destructure the parameter `x` and calculate the value of a variable `y` based on its value.
- We also demonstrate a simplified `if-else` statement where the condition expression directly returns a value, rather than containing multiple code blocks.

The `test_func` function of this smart contract ultimately returns the value of the variable `y`. This simple example is intended to show you how to use if-else statements and if let in Sway for conditional judgments and code branching. We hope this tutorial helps you better understand these control structures in Sway.
