import { defaultConnectors } from '@fuels/connectors';
import { Contract, ContractFactory, Fuel } from 'fuels';

export async function deploy(bytecode: string, abi: any): Promise<Contract> {
    const wallet = await connectWallet();
    const factory = new ContractFactory(bytecode, abi, wallet);
    return await factory.deployContract();
}

export async function loadContract(contractId: string, abi: any): Promise<Contract> {
    const wallet = await connectWallet();
    return new Contract(contractId, abi, wallet);
}

export async function connectWallet() {
    const fuel = new Fuel({
        connectors: defaultConnectors({ devMode: true }),
    });

    if (!await fuel.hasConnector()) {
        await fuel.connect();
    }
    
    const account = await fuel.currentAccount();
    if (!account) {
        throw new Error("Current account not authorized for this connection!");
    }
    return await fuel.getWallet(account);
}