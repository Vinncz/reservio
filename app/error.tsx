"use client" // error page should be run on client
import React, { useRef, useState } from 'react'
import { Terminal, Waves } from "lucide-react"
import Balancer from 'react-wrap-balancer'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Loading from './loading'

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
        <Loading></Loading>
    )
}
