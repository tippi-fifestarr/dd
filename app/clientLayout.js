"use client";
// import { ThirdwebProvider } from "@thirdweb-dev/react";

// import { useEffect, useState } from "react";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli, polygonMumbai } from "wagmi/chains";

const chains = [goerli, polygonMumbai];
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: projectId }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId,
    appName: "web3Modal",
    chains,
    version: "1",
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function ClientLayout({ children }) {
  return (
    <>
      {/* <ThirdwebProvider activeChain="mumbai"> */}
      <WagmiConfig client={wagmiClient}>
        {children /* render the children  */}
      </WagmiConfig>
      {/* </ThirdwebProvider> */}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
