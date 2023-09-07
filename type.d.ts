type User = {
    id: number,
    name: string,
    address: {
        street: string,
        city: string,
        postalCode: string
    }
    aliases: [
        name: string
    ]
}

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

type ReservationObject = {
    room_id     : Number,
    user_id     : Number,
    subject     : String,
    priority_id : Number,
    remark      : String,
    start       : Date,
    end         : Date,
    pin         : String,
}
