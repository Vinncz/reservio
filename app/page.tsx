"use client"
import BackButton from './reusable-components/back-button'
import PageTitle from './reusable-components/page-title'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Calendar } from '@/components/ui/calendar'
import { useState, useEffect } from 'react'

export default function Home() {

    const [final, setFinal] = useState(0)
    const [number, setNumber] = useState(0)
    const [multiplier, setMultiplier] = useState(1)

    useEffect(
        () => {
            const c = number * multiplier
            setFinal(c)
        }
        , [number, multiplier]
    )

    return (
        <>
            <MyReservation />

            <Calendar />

            {final}
            <div className='flex flex-col border p-4 rounded gap-2'>
                Number
                <input placeholder='0' type="number" className='p-2 border rounded' onChange={(e) => {
                    setNumber(parseInt(e.target.value))
                }} />
            </div>
            <div className='flex flex-col border p-4 rounded gap-2'>
                Multiplier
                <input placeholder='1' type="number" className='p-2 border rounded' onChange={(e) => {
                    setMultiplier(parseInt(e.target.value))
                }} />
            </div>
        </>
    )
}

function MyReservation( ) {
    return <div className='gap-4 flex flex-col'>
        {/* <BackButton /> */}
        <PageTitle title="My Reservations" />
        <Separator />
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col border gap-2 p-5 rounded-md">
                <Skeleton className="h-4 max-w-[250px] w-full" />
                <Skeleton className="h-4 max-w-[150px] w-full" />
            </div>
            <div className="flex flex-col border gap-2 p-5 rounded-md">
                <Skeleton className="h-4 max-w-[250px] w-full" />
                <Skeleton className="h-4 max-w-[150px] w-full" />
            </div>
            <div className="flex flex-col border gap-2 p-5 rounded-md">
                <Skeleton className="h-4 max-w-[250px] w-full" />
                <Skeleton className="h-4 max-w-[150px] w-full" />
            </div>
            <div className="flex flex-col border gap-2 p-5 rounded-md">
                <Skeleton className="h-4 max-w-[250px] w-full" />
                <Skeleton className="h-4 max-w-[150px] w-full" />
            </div>
            <div className="flex flex-col border gap-2 p-5 rounded-md">
                <Skeleton className="h-4 max-w-[250px] w-full" />
                <Skeleton className="h-4 max-w-[150px] w-full" />
            </div>
        </div>
    </div>
}

