import { createContext, useContext } from 'react';
import PocketBase from "pocketbase";
export const PocketContext = createContext<
    {
        login: (email: string, password: string) => Promise<unknown>;
        token: string;
        pb: PocketBase | null;
    }
>({
    login: (email: string, password: string) => {
        void email;
        void password;
        return Promise.resolve<unknown>(null);
    },
    token: '',
    pb: null
});

export const usePocket = () => useContext(PocketContext);

