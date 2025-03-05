'use client'
import {createContext, ReactNode, useContext} from "react";

type FolderContextType = {
    folderId: number;
}

const FolderContext = createContext<FolderContextType | null>(null);

export function FolderProvider(
    {children, folderId}: {children: ReactNode; folderId: number}
){
    return (
        <FolderContext.Provider value={{folderId}}>
            {children}
        </FolderContext.Provider>
    )
}

export const useFolderId = () =>{
    const context = useContext(FolderContext);
    if(!context){
        throw new Error("useFolderId must be used within a FolderProvider");
    }
    return context;
}