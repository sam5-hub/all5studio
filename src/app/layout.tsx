import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/src/app/provider";


export const metadata: Metadata = {
    title: "ALL5's Studio",
    description: "Node.js Full Stack Studio",
};

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale} suppressHydrationWarning>
        <head>
            <link rel="icon" href="/alx.svg" sizes="any"/>
        </head>
        <body>

        {/*<NextIntlClientProvider messages={messages}>*/}
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        {/*</NextIntlClientProvider>*/}

        </body>
        </html>
    );
}
