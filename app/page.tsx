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
    const res2:any = await fetcher("reservations/byPerson", {}, true)


    return (
        <div className='flex flex-col gap-12'>
            <AllReservations />
            <MyReservation param={res2}/>
        </div>
    )
}

async function AllReservations () {
    const res:ApiResponse = await fetcher("reservations/withRelation", {}, true)

    return (
        <div className='gap-4 flex flex-col'>
            <PageTitle title="All Reservations" />
            <Separator />
            <div className="grid grid-cols-2 gap-4">
                { res.data.map( (d:ReservationWithRelation) => {
                    const a = new Date(d.attributes.start.toString())
                    const b = new Date(d.attributes.end.toString())
                    return (
                        <>
                            <div className="flex flex-col border gap-2 p-5 rounded-md">
                                <span> {d.id} </span>
                                <span> {d.relationships.room.name} </span>
                                <span> {a.toTimeString()} </span>
                                <span> {b.toTimeString()} </span>
                            </div>
                        </>
                    )
                }) }
            </div>

        </div>
    )
}

interface MyReservationProp {
    param: any
}

function MyReservation ({param}: MyReservationProp) {
    return <div className='gap-4 flex flex-col'>
        <PageTitle title="My Reservations" />
        <Separator />
        <div className="grid grid-cols-2 gap-4">

        { param?.data?.map( (d:ReservationWithRelation) => {
            const a = new Date(d.attributes.start.toString())
            const b = new Date(d.attributes.end.toString())
            return (
                <>
                    <div className="flex flex-col border gap-2 p-5 rounded-md">
                        <span> {d.id} </span>
                        <span> {d.relationships.room.name} </span>
                        <span> {a.getTime()} </span>
                        <span> {b.getTime()} </span>
                    </div>
                </>
            )
        }) }
        </div>
    </div>
}

