import { Address, OpenedContract, fromNano, toNano } from "@ton/core";
import { Spinner } from "../wrappers/Spinner";
import { useAsyncInitialze } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { useEffect, useState } from "react";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function useTonSpinner() {
  const { sender, userAddress } = useTonConnect();
  const { client } = useTonClient();
  const [spinLeft, setSpinLeft] = useState<number | undefined>(undefined);

  const spinnerContract = useAsyncInitialze(async () => {
    if (!client) return;

    const contract = Spinner.fromAddress(
      Address.parse("EQDHvTHhakTtpBIE7uau0bTuo1NMI8_vvEd5AUl41l6yrb-M")
    );

    return client.open(contract) as OpenedContract<Spinner>;
  }, [client]);
useEffect(() => {
  const getSpinLeft = async () => {
    try {
      if (spinnerContract && userAddress) {
        // Fetch the number of spins left from the contract
        const spinsLeft = await spinnerContract.getSpinleft(Address.parse(userAddress));
        console.log("Spins left fetched:", spinsLeft); // BigInt value
        
        // Convert BigInt directly to a number
        const spinsLeftNumber = Number(spinsLeft);
        console.log("Updating spinsLeft state to:", spinsLeftNumber);
        
        // Update state with the converted value
        setSpinLeft(spinsLeftNumber);
      }
    } catch (error) {
      console.error("Failed to fetch spins left:", error);
      setSpinLeft(0); // Default value on error
    }
  };

  getSpinLeft(); // Call the async function to fetch the spins left
}, [spinnerContract, userAddress]);


  useEffect(() => {
    console.log(spinLeft);
  }, [spinLeft]);

  return {
    Claim: async () => {
      spinnerContract?.send(
        sender,
        {
          value: toNano("0.05"),
        },
        "withdraw depositor"
      );
    },

    Deposit: async () => {
      const contractBalanceBefore = await spinnerContract?.getBalance();
      console.log(contractBalanceBefore);
      spinnerContract?.send(
        sender,
        {
          value: toNano("1.02"),
        },
        null
      );

      let BalanceAfter = await spinnerContract?.getBalance();
      let attempt = 1;

      while (contractBalanceBefore === BalanceAfter) {
        console.log("Staking, attempt", attempt);
        await sleep(2000);
        BalanceAfter = await spinnerContract?.getBalance();
        attempt++;
      }
    },
    spinLeft,
    deductSpin: async () => {
      spinnerContract?.send(
        sender,
        {
          value: toNano("0.05"),
        },
        "deduct"
      );
    },
  };
}
