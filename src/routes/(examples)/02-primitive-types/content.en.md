# Primitive types

In Sway, you can use a variety of basic types to construct smart contracts.
1. **Unsigned Integers**:
   - `u8`: An 8-bit unsigned integer, with values ranging from 0 to 2^8-1.
   - `u16`: A 16-bit unsigned integer, with values ranging from 0 to 2^16-1.
   - `u32`: A 32-bit unsigned integer, with values ranging from 0 to 2^32-1.
   - `u64`: A 64-bit unsigned integer, with values ranging from 0 to 2^64-1.
2. **Strings**:
   - String slice (`str`): This is a string of dynamic length.
   - Fixed-length string array (`str[N]`): This is a string of fixed length, where `N` is the length of the string.
3. **Boolean**:
   - `bool`: A boolean type, which can be `true` or `false`.
4. **256-bit Number**:
   - `b256`: This is a 256-bit number, equivalent to 32 bytes.
In the code provided, we define a smart contract named `MyContract` with a function called `test_func` that returns a boolean value. Inside this function, we demonstrate how to use these basic types.
- We define four unsigned integers: `u8`, `u16`, `u32`, and `u64`, all assigned the value 123.
- We define a string slice `s_slice` with the value "fuel".
- We define a fixed-length string array `s_array` of length 4, also with the value "fuel".
- We define a boolean value `boo` with the value `true`.
- Finally, we define a 256-bit number `b_256` with a 32-byte hexadecimal value.

The `test_func` function of this smart contract ultimately returns `true`. This simple example is intended to show you how to use these basic types in Sway. We hope this tutorial helps you better understand the basic types of Sway.
