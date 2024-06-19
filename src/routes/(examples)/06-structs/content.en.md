# Structs

In Sway, structs are important tools for encapsulating data, allowing you to create complex data types and easily read and update this data within smart contracts.

1. **Creating, Reading, and Updating Structs**:
   - When creating an instance of a struct, you need to specify initial values for each field.
   - You can access and update the values of struct fields using the dot notation (`.`).
2. **Shorthand Notation**:
   - When variable names are the same as struct field names, you can use shorthand notation to initialize structs without repeating the field names.
3. **Struct Destructuring**:
   - You can destructure structs using pattern matching, extracting the fields of the struct into separate variables.

In the provided code, we define a smart contract named `MyContract` with a function called `test_func` that returns an instance of the `Line` struct.
- We create an instance of the `Point` struct `p0` and update its `x` field value.
- We use shorthand notation to create an instance of the `Point` struct `p1`.
- We create an instance of the nested struct `Line` named `line`, which contains two instances of the `Point` struct.
- We destructure `line`, extracting its fields into separate variables `x0`, `y0`, `x1`, and `y1`.

The `test_func` function of this smart contract ultimately returns an instance of the `Line` struct. This simple example is intended to show you how to use structs in Sway to create, read, and update data, as well as how to use shorthand notation and struct destructuring. We hope this tutorial helps you better understand structs in Sway.
