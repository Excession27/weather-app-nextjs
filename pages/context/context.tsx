import React, { createContext, useState, ReactNode, useContext } from 'react';
import type { NextPage } from 'next'

type Props = {
    children: ReactNode;
};

type dataContextType = {
    data: Array<string>;
    collectData: (d:Array<string>) => void;
}

export const DataContext = createContext<dataContextType>({
    data: [""],
    collectData: () => []
});


export default function ContextProvider({ children }: Props) {


    let [data, setData] = useState<Array<string>>([]);

    const collectData = (w: Array<string>) => {
        
        setData(() =>
            w
        )
    }


    return (

        <DataContext.Provider value={{ data, collectData }} >
            {children}
        </DataContext.Provider>

    )
}
