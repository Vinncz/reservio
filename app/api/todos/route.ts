import { NextResponse, NextRequest } from "next/server";
import { z } from "zod"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY = process.env.DATA_API_KEY as string

const MySchema = z.object({
    username: z.string({
        required_error: "username is a must and is required"
    }).min(3, "must be at least 3 chars long")
    // username: z.string().optional
    // username: z.unknown()
    // username: z.void() // bisa accept undefined

})

// type Todo = z.infer<typeof MySchema>

export async function GET () {
    const res = await fetch(DATA_SOURCE_URL);

    const todos : Todo[] = await res.json()

    return NextResponse.json(todos)
}

export async function DELETE (request: Request) {
    const { id }: Partial<Todo> = await request.json()

    if (!id) return NextResponse.json({
        message: "Todo id is required"
    })

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
            "API-Key" : API_KEY
        }
    })

    return NextResponse.json({
        message: `Todo ${id} deleted`
    })
}
