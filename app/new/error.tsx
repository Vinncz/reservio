"use client"
import React, { useEffect } from 'react'
import Balancer from 'react-wrap-balancer'
import { Button } from '@/components/ui/button'

export default function Error( { error, reset } : { error : Error; reset : () => void; }) {
    return (
        <div className='w-full pt-[12.5vh] px-12 flex flex-col justify-center gap-6 leading-relaxed tracking-wide'>
            <Balancer className="text-4xl font-bold mb-2">
                <span className='flex mb-[-25px]'> :( </span>
                <br />
                Something went horribly wrong.
            </Balancer>

            But fret not, for this button may resolve the problem for you!

            <Button
                className="rounded px-10 py-3 w-max mb-8 select-none"
                onClick={() => reset()}
            > Let's try again </Button>

            <div className='select-text font-mono flex flex-col gap-2 border p-5 rounded-xl'>
                <span className='opacity-50 text-xs'> Error message: </span>
                <span>{error.message || "No explanation was given."}</span>
            </div>

        </div>
    )
}
