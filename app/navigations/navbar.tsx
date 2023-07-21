import React from 'react'
import { Button } from '@/components/ui/button'
import { Lora } from 'next/font/google'

// const inter = Kanit({ subsets: ['latin'], weight: ["100", "300", "400", "700", '900']})
const font_class = Lora({ subsets: ['latin']})

export default function Navbar() {

    // let mf = inter.className + ' font-bold text-3xl'
    let logo = font_class.className  + ' font-black text-3xl tracking-tight'
    let logo_subtitle = font_class.className + " tracking-tight flex text-xs"

    return (
        <div className='dark:text-zinc-200 dark:bg-zinc-950 w-full border-b dark:border-b-zinc-700 border-b-zinc-300 bg-white justify-center flex z-[9999]'>
            <div className='flex w-full px-5 py-3 max-w-5xl items-center justify-between select-none'>
                <a className='text-gray-800 dark:text-gray-200' href='/'>
                    <span className={logo}> Reservio </span>
                    {/* <div className={logo_subtitle}> Your room booking application </div> */}
                </a>
                <div id='right' className='flex gap-3'>
                    <Button className='h-8 bg-green-700 hover:bg-green-900 dark:bg-green-700 dark:hover:bg-green-900 dark:text-white' >
                        <a href="/new" className=''> New Booking </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
