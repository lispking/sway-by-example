# Solidity Cheatsheet

A quick `Solidity` → `Sway` cross reference for the most commonly used items
- block.timestamp
- msg.sender
- etc

If something is missing here you can most likely find it in the [Sway STD Library](https://github.com/FuelLabs/sway/tree/master/sway-lib-std)

In Sway, you can use various methods to get blockchain state information and perform complex mathematical operations.
1. **Retrieving Block Information**:
   - Sway provides functions such as `height()` and `timestamp()`, which allow smart contracts to retrieve the current block's height and timestamp.
   - In the `get_blocknumber` and `get_blocktime` functions, we demonstrate how to use these functions to get the number and timestamp of the current block.
2. **U128 Integer Type**:
   - Sway does not have a built-in `uint128` type, but it can be represented using the `U128` structure, which consists of two `u64` type values.
   - In the `get_u128_number` function, we demonstrate how to use the `U128` structure to perform addition operations and treat it as a `uint128` type value.
   - It's worth noting that the Sway library also provides a complete list of U128 operations, including exponents, addition, subtraction, multiplication, division, square roots, etc. These operations can be found in the Sway U128 documentation.

In the provided code, we define a smart contract named `SolidityCheatsheet` with four functions: `get_blocknumber`, `get_blocktime`, `get_msg_sender`, and `get_u128_number`.
- The `get_blocknumber` function returns the number of the current block.
- The `get_blocktime` function returns the timestamp of the current block.
- The `get_msg_sender` function returns the sender of the current message.
- The `get_u128_number` function returns the sum of two `U128` type values, which is equivalent to a `uint128` type value.

This simple example is intended to show you how to get blockchain state information and perform U128 integer type operations in Sway. We hope this tutorial helps you better understand these features in Sway.
