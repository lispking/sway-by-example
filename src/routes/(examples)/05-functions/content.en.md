# Functions

In Sway, functions are the core building blocks for performing operations, they can modify data, execute computations, and return results.
1. **Internal and External Functions**:
   - Internal functions (`fn`): These are functions defined and used within the smart contract and cannot be called from outside.
   - External functions (`abi`): These are public interfaces of the smart contract that can be called from outside.
2. **`ref mut`**:
   - `ref mut` is a keyword in Sway used to create a mutable reference, allowing a function to modify the argument passed to it.
3. **Returning Multiple Outputs**:
   - Functions can return multiple values, typically in the form of tuples.

In the provided code, we define a smart contract named `MyContract` with an external function called `test_func` that returns a tuple containing a `u64` type and a `bool` type.
- We define an internal function `eq` to compare whether two `u64` values are equal.
- We define an internal function `inc` that takes a mutable reference `ref mut num` and increments its value by 1.
- We define an internal function `swap_mut` that takes a mutable reference `ref mut pair` and swaps the values it contains.
- We define an internal function `swap` that takes two `u64` values and returns a tuple with the values swapped.

The `test_func` function of the smart contract demonstrates how to use these functions. It first uses the `eq` function to assert the equality of two values. Then, it uses the `inc` function to increment a number and asserts the result. Next, it uses the `swap_mut` function to swap the values in a tuple and asserts the outcome. Finally, it uses the `swap` function to swap two variables and asserts the results.

The `test_func` function of this smart contract ultimately returns the tuple `(123, true)`. This simple example is intended to show you how to use internal and external functions, `ref mut`, and functions that return multiple outputs in Sway. We hope this tutorial helps you better understand functions in Sway.
