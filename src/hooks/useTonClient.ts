
import { getHttpEndpoint } from "@orbs-network/ton-access";

import { TonClient4 } from "@ton/ton";
import { useAsyncInitialze } from "./useAsyncInitialize";

export function useTonClient() {
  return useAsyncInitialze(
    async () => new TonClient4({ endpoint: "https://mainnet-v4.tonhubapi.com" })
  );
}
