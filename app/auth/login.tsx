import React, { FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Login() {
    async function handleSubmitServerSide (formData: FormData) {
        "use server"

        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email)
        console.log(password)

        const payload = {
            "email": email,
            "password": password
        }

        console.log(payload)

        // const s = new FormData(formData.currentTarget)
        // const response = await fetch('', {
        //     method: 'POST',
        //     body: s,
        // })


    }
    return (
        <>
            <form action={handleSubmitServerSide} className="flex flex-col gap-4">
                <Input type='email' name='email'/>
                <Input type='password' name='password'/>
                <Button type='submit'> Submit </Button>
            </form>
        </>
    )
}
