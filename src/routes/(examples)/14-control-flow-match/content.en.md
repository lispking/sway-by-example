# Control Flow - Match Statement

In Sway, control flow, variable assignment, and enums are important concepts that are frequently used when building smart contracts.
1. **Control Flow**:
   - The `match` expression can be used to easily implement conditional checks and control flow in Sway.
   - The `match` expression allows you to match a value against different code blocks.
   - In the `test_function` function, we use `match` to determine the value of `x` and execute the corresponding operation.
2. **Variable Assignment**:
   - In Sway, you can use the `match` expression to assign a value to a variable.
   - You can provide a value for each match condition, and when a condition matches, the corresponding value is assigned to the variable.
   - In the `test_function` function, we use `match` to assign a value to the variable `res` based on the value of `x`.
3. **Enums**:
   - The `Option` type is an enum that contains two possible values: `Some` and `None`.
   - In the `test_function` function, we use `match` to handle the `Option` type variable `y`.
   - If `y` is `Some`, we return its value plus 1; if `y` is `None`, we return 0.

In the provided code, we define a smart contract named `MyContract` with a function called `test_function` that accepts two parameters: a `u64` type `x` and an `Option<u64>` type `y`.
- use `match` expressions to determine the value of `x` and execute the corresponding operation.
- use `match` expressions to assign a value to the variable `res` based on the value of `x`.
- use `match` expressions to handle the `y` variable, and we return the corresponding result based on its value.

The `test_function` function of this smart contract ultimately returns a `u64` type value. This simple example is intended to show you how to use control flow, variable assignment, and enums in Sway to build smart contracts. We hope this tutorial helps you better understand these concepts in Sway.
