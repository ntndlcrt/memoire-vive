'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthCheck({ children }) {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        console.log(session)
    }, [session])

    return <>{children}</>

    //     const { data: session, status } = useSession()
    //     if (status === 'authenticated') {
    //         return <>{children}</>
    //     } else {
    //         return <>Not logged in to see this</>
    //     }
}
