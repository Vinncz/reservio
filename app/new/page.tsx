import React from 'react'
import BackButton from '@/components/ui/back-button'
import PageTitle from '../reusable-components/page-title'
import { Separator } from '@/components/ui/separator'

export default function page() {
    return (
        <div className='gap-4 flex flex-col'>
            <BackButton />
            <PageTitle title="New Reservation" />
            <Separator />
            asdasd
        </div>
    )
}
