# Variable Assignment

In this tutorial, we will learn how to assign values to variables in a smart contract using Sway through a simple example.

## Objective

We will implement a smart contract named `MyContract` and focus on correctly assigning and manipulating variables within the smart contract.

## Steps

1. **Define ABI**:
   First, we need to define an ABI (Application Binary Interface), which describes the public interface of the smart contract.
   Here, we define an ABI named `MyContract` with a method `test_func` that takes no parameters and returns a value of type `u64`.
2. **Implement ABI**:
   Next, we need to provide an implementation for the `MyContract` ABI.
   `Contract` is a global type in Sway that represents the smart contract itself. Using the `impl` keyword, we implement the methods defined in the `MyContract` ABI for the `Contract` type.

3. **Variable Assignment**:
   In the `test_func` function, we will demonstrate how to assign values to variables in Sway.
   In this function, we define an immutable variable `x` and a mutable variable `y`. We change the value of `y` and return it. Note that once an immutable variable is assigned a value, it cannot be changed, whereas a mutable variable can be reassigned.

4. **Compile and Deploy**:
   After writing the smart contract, you need to compile it into bytecode using the Sway compiler and then deploy it to the blockchain. This process typically involves using specific tools and commands, so refer to the documentation of the blockchain platform you are using for details.

## Summary

In this tutorial, we focused on how to assign values to variables in Sway smart contracts. We defined immutable and mutable variables and demonstrated how to correctly assign values to them. Through this example, you should now have a basic understanding of variable assignment in Sway. Remember, using variables correctly is key to writing efficient and secure smart contracts.
