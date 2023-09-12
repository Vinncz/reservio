type ApiResponse = {
    status        : String,
    message       : String,
    data          : []
}

type Location = {
    floor         : String,
    landmark      : String
}

type User = {
    id            : String,
    name          : String,
    username      : String
}

type Room = {
    id            : String,
    name          : String,
    announcement  : String,
    location      : Location
    capacity      : String,
    facilities    : []
}

type Priority = {
    id            : String,
    name          : String
}

type Reservation = {
    id            : String,
    attributes    : {
        subject         : String,
        remark          : String,
        start           : String,
        end             : String,
        pin             : String
    },
    relationships : {
        room_id         : String,
        user_id         : String,
        priority_id     : String,
    }
}

type ReservationWithRelation = {
    id            : String,
    attributes    : {
        subject         : String,
        remark          : String,
        start           : Date,
        end             : Date,
        pin             : String
    },
    relationships : {
        room            : Room,
        user            : User,
        priority        : Priority,
    }
}
