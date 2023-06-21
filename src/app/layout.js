'use client'

import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const neuebit = localFont({
    src: [
        {
            path: '../../public/fonts/PPNeueBit-Bold.otf',
            weight: '400',
        },
    ],
    variable: '--font-neuebit',
})

const inter = Inter({
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-inter',
})

import AuthProvider from '@/utils/AuthProvider'
import Nav from '@/components/UI/Nav'
import Footer from '@/components/UI/Footer'

// export const metadata = {
//     title: 'Mémoire Vive',
// }

import '@/styles/app.scss'

export default function AppLayout({ children }) {
    const pathname = usePathname()
    const [showNav, setShowNav] = useState(true)
    const [showFooter, setShowFooter] = useState(true)

    useEffect(() => {
        if (pathname.includes('auth')) {
            setShowNav(false)
            setShowFooter(false)
        }
    }, [pathname])

    return (
        <AuthProvider>
            <html
                lang="en"
                className={`${neuebit.variable} ${inter.variable} font-sans`}
            >
                <body>
                    {showNav && <Nav />}
                    <main className="relative z-[10]">{children}</main>
                    {showFooter && <Footer />}
                </body>
            </html>
        </AuthProvider>
    )
}
