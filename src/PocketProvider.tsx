import { useCallback, useEffect, useMemo, useState } from 'react';
import PocketBase from "pocketbase";
import { PocketContext } from './hooks/usePocket';

const BASE_URL = 'https://admin.dancurley.co.uk';

export const PocketProvider = ({ children }: { children: React.ReactNode }) => {
  const pb = useMemo(() => new PocketBase(BASE_URL), []);
  const [token, setToken] = useState(pb.authStore.token);
  //  const [user, setUser] = useState(pb.authStore.record?.email);

  const login = useCallback(async (email: string, password: string) => {
    return await pb.collection("users").authWithPassword(email, password);
  }, [pb]);

  useEffect(() => {
    pb.authStore.onChange((token) => {
      setToken(token);
    });
  }, [pb]);

  return (
    <PocketContext.Provider
      value={{ login, token, pb }}
    >
      {children}
    </PocketContext.Provider>
  );
}