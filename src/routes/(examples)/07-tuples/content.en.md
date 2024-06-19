# Tuples

In Sway, tuples are a composite data type used to encapsulate multiple values. They can contain elements of different types and can be nested within each other.
1. **Creating, Reading, and Updating Tuples**:
   - When creating a tuple, you need to specify initial values for each position.
   - You can access and update the values of a tuple using indexing.
2. **Nested Tuples**:
   - Tuples can contain other tuples as elements, creating a nested structure.
3. **Destructuring Tuples and the "_" Character**:
   - You can use pattern matching to destructure tuples, extracting their values into separate variables.
   - If you don't need a particular value when destructuring, you can use the underscore character (`_`) to ignore it.

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that returns a tuple containing an `u64` type and another tuple, which includes a `str` type and a `bool` type.
- We create a tuple `tuple` with three elements and update its first element.
- We access the first element of `tuple` and assign it to the variable `x`.
- We create a nested tuple `nested` containing a number and another tuple with a string and a boolean value.
- We destructure `nested` to extract its internal string `s`.
- We destructure `nested` again, this time ignoring the first element and the boolean value of the tuple.
- Finally, we return the nested tuple `nested`.

The `test_func` function of this smart contract ultimately returns a nested tuple. This simple example is intended to show you how to use tuples in Sway to create, read, and update data, as well as how to use nested tuples and destructuring. We hope this tutorial helps you better understand tuples in Sway.
