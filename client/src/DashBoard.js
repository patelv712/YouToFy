import React from 'react'
import UseAuth from './UseAuth'

export default function DashBoard({code}) {
    const accessToken = UseAuth(code)
    return <div>{code}</div>
}
