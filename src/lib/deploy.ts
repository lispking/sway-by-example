import { defaultConnectors } from '@fuels/connectors';
import { Contract, ContractFactory, Fuel } from 'fuels';

export async function deploy(bytecode: string, abi: any): Promise<Contract> {
    const fuel = new Fuel({
        connectors: defaultConnectors({ devMode: true }),
    });

    await fuel.connect();
    
    const account = await fuel.currentAccount();
    if (!account) {
        throw new Error("Current account not authorized for this connection!");
    }

    const wallet = await fuel.getWallet(account);

    const factory = new ContractFactory(bytecode, abi, wallet);
    return await factory.deployContract();
}
