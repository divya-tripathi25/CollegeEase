import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function NotificationAlert() {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}
