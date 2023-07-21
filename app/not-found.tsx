"use client" // error page should be run on client
import React, { useRef, useState } from 'react'
import { BirdIcon, CompassIcon } from "lucide-react"
import Balancer from 'react-wrap-balancer'
import { Button } from '@/components/ui/button'
import { Lato } from 'next/font/google'
import Navbar from './navigations/navbar'

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", '900'] })

export default function Error() {

    return (
        <html lang="en" className={lato.className}>
            <body className="flex h-auto dark:text-zinc-200 dark:bg-zinc-950 flex-col items-center w-full">
                <Navbar />
                <div className="flex flex-col h-full max-w-5xl w-full pt-16 px-5 pb-56">
                    <div className='w-full pt-[20vh] px-10 flex flex-col justify-center gap-6 leading-relaxed tracking-wide'>
                        <div className="text-4xl font-bold mb-2 pr-[60%] select-none">
                            <CompassIcon className='flex mb-[-25px]'> ? </CompassIcon>
                            <BirdIcon className='flex mb-[-20px] ml-[35px]'> ? </BirdIcon>
                            <br />
                            404 - Looks like we got lost!
                        </div>

                        <Balancer className=' select-none'> Time to call for a magic taxi! Legend says that it can take you back from wherever you are! </Balancer>

                        <Button className="rounded px-10 py-3 w-max mb-8 select-none">
                            <a href="/"> Call a taxi! </a>
                        </Button>
                    </div>
                </div>
            </body>
        </html>
    )
}
