"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function ClientLayout({ children }) {
  return (
    <ThirdwebProvider activeChain="mumbai">
      {children /* render the children  */}
    </ThirdwebProvider>
  );
}
