import "./globals.css";
import {Lato} from "next/font/google";

const lato = Lato({
    weight: '400',
    subsets: ['latin'],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={lato.className}>
        <body>
        {children}
        </body>
        </html>
    );
}
