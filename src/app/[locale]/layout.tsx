import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "./globals.css";
import {ThemeProvider} from "@/src/app/provider";

import Header from "@/components/Header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "ALL5's Studio",
    description: "Node.js Project Studio",
};

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <html lang={locale} suppressHydrationWarning>
        <head>
            <link rel="icon" href="/app.svg" sizes="any"/>
        </head>
        <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <Header/>
                {children}
            </ThemeProvider>
        </NextIntlClientProvider>

        </body>
        </html>
    );
}
