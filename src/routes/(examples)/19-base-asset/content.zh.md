# Base Asset

在Sway中，资产操作是智能合约的核心功能之一，它允许合约处理资金的转入（deposit）、转出（withdraw）和查询余额（get_balance）。

1. **存款（Deposit）**：
   - `deposit`函数是一个可支付的函数，允许用户向智能合约存入资金。
   - 在`deposit`函数中，我们使用`require`函数来确保传入的资产ID是基础资产（base asset），并且存款金额大于0。
2. **提款（Withdraw）**：
   - `withdraw`函数允许用户从智能合约中提取资金。
   - 我们使用`transfer`函数来执行资金的转出操作，该函数接受发送者、资产ID和金额作为参数。
3. **查询余额（Get Balance）**：
   - `get_balance`函数允许用户查询智能合约中基础资产的余额。
   - 我们使用`balance_of`函数来获取合约ID和资产ID对应的余额。

在代码中，定义一个名为`MyContract`的智能合约，其中包含三个函数：`deposit`、`withdraw`和`get_balance`。
- `deposit`函数允许用户向智能合约存入资金，并确保操作的有效性。
- `withdraw`函数允许用户从智能合约中提取资金。
- `get_balance`函数允许用户查询智能合约中基础资产的余额。

这个简单的例子旨在向你展示如何在Sway中使用资产操作来构建一个基本的资金管理智能合约。希望这个教程能帮助你更好地理解Sway中的资产操作。
