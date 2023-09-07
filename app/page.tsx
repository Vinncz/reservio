import PageTitle from './reusable-components/page-title'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import fetcher from '@/lib/fetcher/fetcher'

// const ReservationObjectSchema = z.object({
//     room_id     : z.number(),
//     user_id     : z.number(),
//     subject     : z.string(),
//     priority_id : z.number(),
//     remark      : z.string(),
//     start       : z.date(),
//     end         : z.date(),
//     pin         : z.string(),
// })

// type ReservationObject = z.infer<typeof ReservationObjectSchema>

export default async function Home () {

    const res = await fetcher()

    return (
        <>
            <MyReservation />

            {/* <SimpleCalculator /> */}
        </>
    )
}

function MyReservation () {
    return <div className='gap-4 flex flex-col'>
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

