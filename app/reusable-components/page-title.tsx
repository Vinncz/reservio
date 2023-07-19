import React from 'react'

type param = {
    title : string
}

export default function PageTitle (prop: param) {
    return (
        <span className='text-2xl font-normal'> {prop.title} </span>
    )
}
