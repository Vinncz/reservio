"use client"
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function ModeToggle ()  {
    useEffect(() => {
        const a = document.getElementById("html")
        window.matchMedia('(prefers-color-scheme: dark)').matches ? console.log("dark mode preference detected") : null

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log("dark mode activated")
            a?.classList.add('dark')
        } else {
            console.log("dark mode deactivated")
            a?.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <Button id='modeToggle' onClick={() => {
                const a = document.getElementById("html")
                a?.classList.toggle("dark");
            }} className='fixed right-[17.5px] bottom-[17.5px] aspect-square px-0 rounded-full'>
                <i className="text-xl bi bi-moon opacity-90"></i>
            </Button>
        </>
    )
}
