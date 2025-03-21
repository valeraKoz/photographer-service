import {Open_Sans} from "next/font/google";
import "./globals.css";
import React from "react";
import {GoToDashboard} from "@components/go-to-dashboard/GoToDashboard";
import {getSession} from "@utils/lib/getSession";
import {AppQueryClientProvider} from "@components/appQueryClientProvider/AppQueryClientProvider";
import StoreProvider from "@/providers/StoreProvider";
import {ModalController} from "@/providers/ModalController";

const openSans = Open_Sans({
    subsets: ["cyrillic"],
});


export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout(
    { children }: Readonly<{ children: React.ReactNode }>){
    const session = await getSession();
    const isAdmin = session?.isAdmin
    return (
            <html lang="ru">
            <body className={`${openSans.className} antialiased`}>
                <StoreProvider>
                    <AppQueryClientProvider>
                            {children}
                            {isAdmin ? <GoToDashboard/> : null}
                    </AppQueryClientProvider>
                    <ModalController/>
                </StoreProvider>
            </body>
            </html>
    );
}
