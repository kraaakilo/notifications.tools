import './global.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: 'Notifications Tools',
    description: 'Générez vos notifications facilement.',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"/>
        </Head>
        <body>
            {children}
        </body>
        </html>
    )
}
