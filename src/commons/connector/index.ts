import { InjectedConnector } from "@web3-react/injected-connector";

const supportedChainIds = [1];
export const injected = new InjectedConnector({ supportedChainIds });
