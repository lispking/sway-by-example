# Results

In Sway, the Result type is a commonly used pattern matching type that represents the outcome of an operation as either successful (Ok) or unsuccessful (Err).

In the provided code, we define a smart contract named `MyContract` with a function called `test_div` that accepts two `u64` type parameters and returns a `u64` type value.
- The Result type is a pattern matching type in Sway that can contain a successful value (Ok) or a reason for failure (Err).
- In smart contracts, Result types are typically used to handle potential errors, such as division by zero.
- We define a `MathError` enum to represent possible errors in mathematical operations.
- In the `div` function, we check if the divisor is zero, and if so, we return a result with `MathError::DivByZero` as the error.
- In the `test_div` function, we call the `div` function and use pattern matching to handle the result. If the result is successful, we return the value; if the result is an error, we revert the transaction.

The `test_div` function of this smart contract ultimately returns a `u64` type value. This simple example is intended to show you how to use Result types in Sway to handle potential errors. We hope this tutorial helps you better understand Result types in Sway.
