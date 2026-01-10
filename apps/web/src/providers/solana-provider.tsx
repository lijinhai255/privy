import { Connection } from "@solana/web3.js";
import React, { createContext, useContext, useMemo } from "react";

interface SolanaContextType {
  connection: Connection;
}

const SolanaContext = createContext<SolanaContextType | undefined>(undefined);

export function SolanaProvider({ children }: { children: React.ReactNode }) {
  const rpcUrl = (import.meta.env.VITE_SOLANA_RPC_URL as string) || "https://api.devnet.solana.com";

  const connection = useMemo(() => {
    if (!rpcUrl) {
      console.warn(
        "VITE_SOLANA_RPC_URL is not set, using default devnet RPC"
      );
      return new Connection("https://api.devnet.solana.com", "confirmed");
    }
    return new Connection(rpcUrl, "confirmed");
  }, [rpcUrl]);

  const value = useMemo(
    () => ({
      connection,
    }),
    [connection]
  );

  return (
    <SolanaContext.Provider value={value}>{children}</SolanaContext.Provider>
  );
}

export function useSolana() {
  const context = useContext(SolanaContext);
  if (context === undefined) {
    throw new Error("useSolana must be used within a SolanaProvider");
  }
  return context;
}
