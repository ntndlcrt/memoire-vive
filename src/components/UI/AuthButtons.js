'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

export function SignInButton() {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <>...</>
    }

    if (status === 'authenticated') {
        return (
            <Link
                href={`/dashboard`}
                className="w-[2.22vw] block aspect-square overflow-hidden rounded-[50%] relative"
            >
                <Image src={session.user?.image} fill={true} alt="Your Name" />
            </Link>
        )
    }

    return (
        <button className="button" onClick={() => signIn()}>
            Sign in
        </button>
    )
}

export function SignOutButton() {
    return <button onClick={() => signOut()}>Sign out</button>
}

export function ProviderButton({ provider }) {
    return (
        <button className="button px-[5vw]" onClick={() => signIn(provider.id)}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AFA7FF] to-[#000099]">
                Continue with {provider.name}
            </span>
        </button>
    )
}
