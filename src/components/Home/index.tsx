import MetaMaskCard from "../connectorCards/metaMask/MetaMaskCard";

import {
  Web3ReactHooks,
  useWeb3React,
  Web3ReactProvider,
} from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

import type { Connector } from "@web3-react/types";
import { hooks as metaMaskHooks, metaMask } from "../../connectors/metaMask";

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];
export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return "MetaMask";
  return "Unknown";
}

function Child() {
  const { connector } = useWeb3React();
  console.log(`Priority Connector is: ${getName(connector)}`);
  return null;
}

export default function Home() {
  return (
    <>
      <Web3ReactProvider connectors={connectors}>
        <Child />
      </Web3ReactProvider>
      <div
        style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
      >
        <MetaMaskCard />
      </div>
    </>
  );
}
