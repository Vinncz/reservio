"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Balancer from 'react-wrap-balancer'
import { useRouter } from 'next/navigation'

export default function Loading () {

    const [counter, setCounter] = useState(0)
    const r = useRouter()

    return (
        <div className='w-full pt-[20vh] px-10 flex flex-col justify-center gap-6 leading-relaxed tracking-wide'>
            <Balancer className="text-4xl font-bold mb-2 select-none">
                <span className='flex mb-[15px]'> :) </span>
                Sit tight! We're preparing the page for you.
            </Balancer>

            <Balancer className=' select-none'> Waiting for too long? Consider clicking the button below to ease your boredom! </Balancer>

            <div className="flex flex-wrap gap-4 mt-4">
                <Button className="rounded px-10 py-3 w-max select-none" onClick={() => setCounter(counter + 1)}>
                    I've been clicked {counter} times!
                </Button>
                <Button variant={'link'} className="rounded py-3 w-max select-none" onClick={() => r.back()}>
                    Take me back. I've changed my mind.
                </Button>
            </div>

        </div>
    )
}
