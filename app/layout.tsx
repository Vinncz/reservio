import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import ModeToggle from './toggles/mode-toggle'
import Navbar from './navigations/navbar'
import dns from "dns";

dns.setDefaultResultOrder("ipv4first")

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", '900'] })

export const metadata: Metadata = {
    title: 'Reservio',
    description: 'An intuitive room booking application'
}

export default function RootLayout( {children} : {children: React.ReactNode} ) {
    return (
        <html id='html' lang="en" className={lato.className}>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
            </head>
            <body id='body' className="flex h-auto dark:!text-zinc-200 dark:!bg-zinc-950 dark:!border-zinc-800 !border-zinc-200 flex-col items-center w-full">
                <noscript className='bg-rose-400 w-full flex justify-center text-rose-950 py-8 items-center gap-4 px-8 wrap balanced'> <i className="text-xl bi bi-exclamation-circle-fill opacity-90"></i> Enable javascript in your browser to continue using Reservio. </noscript>
                <Navbar />

                <div className="relative flex flex-col max-w-5xl w-full pt-16 px-5 pb-56">
                    {children}
                </div>

                <ModeToggle />
            </body>
        </html>
    )
}
