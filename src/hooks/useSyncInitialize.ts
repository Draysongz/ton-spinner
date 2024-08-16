/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export function useSyncInitialize<T>(func: () => T, deps: any[] = []) {
  const [state, setState] = useState<T | undefined>();

  useEffect(() => {
    (async () => {
      setState(func());
    })();
    return () => {};
  }, deps);

  return state;
}
