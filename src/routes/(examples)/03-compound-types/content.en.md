# Compound Types

In Sway, in addition to primitive types, you can use compound types to build more complex smart contracts.

1. **Tuples**:
   - Tuples are combinations that can contain elements of different types. For example, `(42, true)` is a tuple that contains one `u64` type and one `bool` type.
   - You can access values in a tuple by their index, such as `t.0` and `t.1`.
   - You can also destructure a tuple, assigning its values to different variables separately.
2. **Structs**:
   - Structs are custom data types that can contain multiple named fields. For example, the `Point` struct contains two fields: `x` and `y`.
   - You can access the fields of a struct using the dot notation (`.`).
3. **Arrays**:
   - Arrays are fixed-size data structures that can contain multiple elements of the same type.
   - In Sway, you can create arrays that contain primitive types (such as `u8`), strings, or even struct instances.
   - You can also create mutable arrays and modify elements within the array.

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that returns an instance of the `Point` struct.
- define a tuple `t` and destructure it, assigning its values to `num` and `boo`.
- define a tuple of length 1, `one`.
- define an instance of the `Point` struct, `p`, and access its fields.
- define three arrays: one containing `u8` elements, one containing strings, and one containing instances of the `Point` struct.
- define a mutable array `mut_arr` and modify the value of one of its elements.

The `test_func` function of this smart contract ultimately returns an instance of the `Point` struct. This simple example is intended to show you how to use these compound types in Sway. We hope this tutorial helps you better understand the compound types of Sway.
