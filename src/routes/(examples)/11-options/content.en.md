# Options

In Sway, the Option type is a commonly used pattern matching type that represents a value that may be present (Some) or absent (None).

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that returns a tuple containing three Option types, each containing a boolean value.

- The Option type is a pattern matching type in Sway that can contain a value or no value at all.
- In smart contracts, Option types are typically used to handle values that may exist, such as a possible address or a possible number.
- In the `test_func` function, we create three Option types: `liked` with a value of Some(true); `disliked` with a value of Some(false); and `none` with a value of None.
- Finally, we return a tuple containing these three Option types.

The `test_func` function of this smart contract ultimately returns a tuple containing three Option types. This simple example is intended to show you how to use Option types in Sway to represent values that may exist. We hope this tutorial helps you better understand Option types in Sway.
