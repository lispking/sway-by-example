# Constants

In Sway, constants are values that remain unchanged throughout the lifecycle of the smart contract.
1. **Basic Constants**:
   - Basic constants are constants that are directly specified within the smart contract definition.
   - You can use hexadecimal numbers to specify the value of a constant.
2. **Associated Constants**:
   - Associated constants are part of a struct or enum, and they are associated with the struct or enum.
   - Associated constants can be defined within the implementation of a struct or enum.

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that returns an instance of the `Point` struct.
- We define a basic constant `ZERO_B256` with the value 0x0000000000000000000000000000000000000000000000000000000000000000, which is a 256-bit value.
- We use this 256-bit value to create a basic constant `ZERO_ADDRESS`, which is an address-type constant.
- We define a `Point` struct and, within its implementation, define an associated constant `ZERO`, which is an instance of the `Point` struct with `x` and `y` fields both set to 0.
- The `test_func` function of the smart contract demonstrates how to use these constants. It first defines a basic constant named `MY_NUM` with the value 123. Then, it returns the associated constant `ZERO`.

The `test_func` function of this smart contract ultimately returns an instance of the `Point` struct. This simple example is intended to show you how to use basic and associated constants in Sway. We hope this tutorial helps you better understand constants in Sway.
