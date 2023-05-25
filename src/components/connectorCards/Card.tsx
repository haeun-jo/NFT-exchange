import type { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import type { Connector } from "@web3-react/types";

import { Accounts } from "./Accounts";
import { Status } from "./Status";

interface Props {
  connector: MetaMask;
  activeChainId: ReturnType<Web3ReactHooks["useChainId"]>;
  chainIds?: ReturnType<Web3ReactHooks["useChainId"]>[];
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
  error: Error | null;
  setError: (error: Error | null) => void;
  ENSNames: ReturnType<Web3ReactHooks["useENSNames"]>;
  provider?: ReturnType<Web3ReactHooks["useProvider"]>;
  accounts?: string[];
}

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return "MetaMask";
  return "Unknown";
}

export function Card({
  connector,
  isActivating,
  isActive,
  error,
  setError,
  ENSNames,
  accounts,
  provider,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "20rem",
        padding: "1rem",
        margin: "1rem",
        overflow: "auto",
        border: "1px solid",
        borderRadius: "1rem",
      }}
    >
      <b>{getName(connector)}</b>
      <div style={{ marginBottom: "1rem" }}>
        <Status isActivating={isActivating} isActive={isActive} error={error} />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      {isActive ? (
        <button
          onClick={() => {
            if (connector?.deactivate) {
              void connector.deactivate();
            } else {
              void connector.resetState();
            }
          }}
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={() =>
            void connector
              .activate()
              .then(() => setError(null))
              .catch(setError)
          }
          disabled={isActivating}
        >
          {error ? "Try again?" : "Connect"}
        </button>
      )}
    </div>
  );
}
