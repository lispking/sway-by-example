# Base Asset

In Sway, asset operations are one of the core functionalities of smart contracts, allowing contracts to handle the deposit (deposit), withdrawal (withdraw), and balance inquiry (get_balance) of funds.
1. **Deposit (Deposit)**:
   - The `deposit` function is a payable function that allows users to deposit funds into the smart contract.
   - In the `deposit` function, we use the `require` function to ensure that the incoming asset ID is the base asset (base asset) and that the deposit amount is greater than 0.
2. **Withdrawal (Withdraw)**:
   - The `withdraw` function allows users to withdraw funds from the smart contract.
   - We use the `transfer` function to execute the outgoing operation, which takes the sender, asset ID, and amount as parameters.
3. **Balance Inquiry (Get Balance)**:
   - The `get_balance` function allows users to query the balance of the base asset in the smart contract.
   - We use the `balance_of` function to get the balance corresponding to the contract ID and asset ID.

In the provided code, we define a smart contract named `MyContract` with three functions: `deposit`, `withdraw`, and `get_balance`.
- The `deposit` function allows users to deposit funds into the smart contract and ensures the validity of the operation.
- The `withdraw` function allows users to withdraw funds from the smart contract.
- The `get_balance` function allows users to query the balance of the base asset in the smart contract.

This simple example is intended to show you how to use asset operations to build a basic fund management smart contract in Sway. We hope this tutorial helps you better understand asset operations in Sway.
