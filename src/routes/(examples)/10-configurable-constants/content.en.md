# Configurable Constants

In Sway, configurable constants allow the deployer of the smart contract to specify the values of constants when deploying the contract. These constants are immutable once the contract is executed, but can be configured at deployment time.

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that returns a tuple containing a `u64` type, an `Address` type, and a `Point` type.
- We use the `configurable` keyword to define a set of configurable constants. These constants can be specified when the contract is deployed and their values are immutable once the contract is executed.
- We define three configurable constants: `MY_NUM`, with a value of 123; `OWNER`, with a value of an address; and `POINT`, with a value of an instance of the `Point` struct.
- The `test_func` function of the smart contract demonstrates how to use these configurable constants. It returns the values of these constants as a tuple.

The `test_func` function of this smart contract ultimately returns a tuple containing `MY_NUM`, `OWNER`, and `POINT`. This simple example is intended to show you how to use configurable constants in Sway and how to configure their values at deployment time. We hope this tutorial helps you better understand configurable constants in Sway.
