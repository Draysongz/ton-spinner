
import { getHttpEndpoint } from "@orbs-network/ton-access";

import { TonClient } from "@ton/ton";
import { useAsyncInitialze } from "./useAsyncInitialize";

export function useTonClient() {
  return{
    client:  useAsyncInitialze(
    async () => new TonClient({endpoint: await getHttpEndpoint({network: "testnet"})})
  )
}
}
