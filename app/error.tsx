"use client" // error page should be run on client
import React, { useRef, useState } from 'react'
import { Terminal, Waves } from "lucide-react"
import Balancer from 'react-wrap-balancer'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Error( { error, reset } : { error : Error; reset : () => void; }) {

    const collapsibleElement = useRef<HTMLDivElement>(null);
    const [preventDoubleClick, setPreventDoubleClick] = useState(false)
    const handleCollapse = () => {
        if (collapsibleElement.current) {
            var old_class = collapsibleElement.current.classList.toString();
            var old_class = old_class.replace("cuta", "cut")
            collapsibleElement.current.className = old_class
            setPreventDoubleClick(false)
        }
    }
    const handleExpand = () => {
        if (collapsibleElement.current && preventDoubleClick == false) {
            collapsibleElement.current.classList.replace('cut', 'cuta');
            setPreventDoubleClick(true)
        }
    };

    return (
        <div className='w-full pt-[12.5vh] px-10 flex flex-col justify-center gap-6 leading-relaxed tracking-wide'>
            <div className="text-4xl font-bold mb-2 pr-[45%] select-none">
                <span className='flex mb-[-25px]'> :( </span>
                <br />
                Something went horribly wrong.
            </div>

            <span className=' select-none'> But fret not, for this magic button may resolve the problem for you! </span>

            <Button
                className="rounded px-10 py-3 w-max mb-8 select-none"
                onClick={() => reset()}
            > Let's try that again </Button>

            <Alert className='flex flex-col gap-2 rounded-xl py-6 cut' ref={collapsibleElement} onClick={handleExpand}>
                <Terminal className="h-4 w-4 mt-2" />
                <AlertTitle className='mb-3 font-bold select-none'> Error message </AlertTitle>
                <AlertDescription className='font-mono opacity-50'>{error.message || "No explanation was given."}</AlertDescription>
                {error.message.length >= 255 ? <Button variant={'link'} className='w-min ml-[-14px]' onClick={handleCollapse}> Collapse </Button> : null}
            </Alert>

        </div>
    )
}
