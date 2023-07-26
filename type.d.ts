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
