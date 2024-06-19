# Enums

In Sway, enums are a data type used to define a set of named constant values. They are a core component of the data type system and can be used to represent different states or choices.

1. **Basic Enums**:
   - Enums are a set of named constants that can have associated data or no associated data.
   - In Sway, you can define enums and their associated data.
2. **Struct Enums**:
   - You can define an enum that contains other struct-type enum values.
   - These enum values can be struct instances or combinations of other types.
3. **Enum of Enums**:
   - You can define an enum that contains other enum types as enum values.
   - This type of enum can be used for more complex logic and state management.

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that returns a value of the `Error` enum type.
- We define a basic enum `Color` with three enum values: `Red`, `Blue`, and `Green`.
- We define a struct enum `Shape` with two enum values: `Circle` and `Triangle`. The `Circle` enum value contains a `Point` struct instance and a `u64` type value, while the `Triangle` enum value contains an array of three `Point` struct instances.
- We define an enum of enums `Error` with two enum values: `Auth` and `Transfer`. The `Auth` enum value contains an `AuthError` enum value, and the `Transfer` enum value contains a `TransferError` enum value.
- We define a basic enum `AuthError` with two enum values: `NotOwner` and `NotApproved`.
- We define a basic enum `TransferError` with two enum values: `TransferToZeroAddress` and `InsufficientBalance`.
- The `test_func` function of the smart contract demonstrates how to use these enums. It first defines a `Color` enum value, then a `Shape` enum value. Finally, it defines an `Error` enum value containing an `AuthError` enum value.

The `test_func` function of this smart contract ultimately returns an instance of the `Error` enum value. This simple example is intended to show you how to use enums in Sway to define and select different states or options. We hope this tutorial helps you better understand enums in Sway.
