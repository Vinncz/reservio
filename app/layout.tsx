import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Navbar from './navigations/navbar'

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", '900'] })

export const metadata: Metadata = {
    title: 'Reservio',
    description: 'An intuitive room booking application'
}

export default function RootLayout( {children} : {children: React.ReactNode} ) {
    return (
        <html lang="en" className={lato.className}>
            <body className="flex h-auto dark:text-zinc-200 dark:bg-zinc-950 flex-col items-center w-full">
                <Navbar />

                <div className="flex flex-col h-full max-w-5xl w-full pt-16 px-5 pb-56">
                    <noscript> Enable javascript in your browser to continue. </noscript>
                    {children}
                </div>
            </body>
        </html>
    )
}
