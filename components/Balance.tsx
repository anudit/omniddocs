"use client";

import { optimismSepolia } from "viem/chains";
import { http, createPublicClient, formatEther } from "viem";
import { useEffect, useState } from "react";

export const publicClientOp = createPublicClient({
  chain: optimismSepolia,
  transport: http("https://rpc.ankr.com/optimism_sepolia"),
});

export const publicClientArb = createPublicClient({
  chain: optimismSepolia,
  transport: http("https://arbitrum-sepolia.blockpi.network/v1/rpc/public"),
});

const Balance = ({
  network,
  address,
}: {
  network: "op" | "arb";
  address: string;
}) => {
  const [bal, setBal] = useState("0");
  useEffect(() => {
    let c = network == "op" ? publicClientOp : publicClientArb;
    c.getBalance({
      address: address as `0x${string}`,
    }).then((balance) => {
      setBal(formatEther(balance));
    });
  }, []);

  return (
    <>
      {bal} ETH, good for {Math.floor(parseFloat(bal) / 0.0000312453)} txns.
    </>
  );
};

export default Balance;
