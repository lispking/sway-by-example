# Hello Modular

This code is an example of a smart contract written in the `Sway` language. `Sway` is a programming language designed for writing smart contracts on the blockchain, specifically for the `Fuel` blockchain. Although `Sway` is different from `Solidity`, they share similarities in the basic functions and structure of smart contracts.

The code comments first point out that smart contracts written in `Sway` are the same as those written in `Solidity` at the bottom level, both being implemented through deploying bytecode and `API` interactions with the state.

Next, an `ABI` (Application Binary Interface) named `HelloModular` is defined. An `ABI` is an interface that explicitly defines the function signatures within a contract, allowing the external world to know how to interact with the contract correctly.

In Sway, the `#[storage(read)]` annotation is used to indicate whether a function has permission to read the contract state. In this example, the `my_lucky_number` function is marked as read-only.

The `storage` block defines all the state available within the contract. In this contract, there is a state variable named `lucky_number` of type `u64` (64-bit unsigned integer) initialized to 777.

Finally, the `impl` block provides the real implementation of the `HelloModular` `ABI`. For the `Contract` type, the implementation of the `my_lucky_number` function simply reads the value of `lucky_number` from the contract storage.

In summary, this code demonstrates a simple smart contract that defines a function to read a lucky number stored within the contract. Through this example, we have learned how to define the public interface, state, and implementation of a contract in Sway.
