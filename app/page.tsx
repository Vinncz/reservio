import PageTitle from './reusable-components/page-title'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import fetcher from '@/lib/fetchers/fetcher'
import asyncFetcher from '@/lib/fetchers/asyncFetcher'

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

    // const res = await asyncFetcher(["reservations/id/18", "reservations/withRelation"], {}, true)

    // console.log(res[1].data[0].relationships)


    return (
        <div className='flex flex-col gap-12'>
            <AllReservations />
            <MyReservation />
        </div>
    )
}

async function AllReservations () {
    const res:any = await fetcher("reservations/withRelation", {}, true)
    // console.log(res.data[0].attributes)

    return (
        <div className='gap-4 flex flex-col'>
            <PageTitle title="All Reservations" />
            <Separator />
            <div className="grid grid-cols-2 gap-4">
                { res.data.map(d => {
                    return (
                        <>
                            <div className="flex flex-col border gap-2 p-5 rounded-md">
                                <span> {d.id} </span>
                                <span> {d.relationships.room.name} </span>
                                <span> {d.attributes.start} </span>
                                <span> {d.attributes.end} </span>
                            </div>
                        </>
                    )
                }) }
            </div>

        </div>
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

