import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

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
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-inter',
})

import AuthProvider from '@/utils/AuthProvider'
import Nav from '@/components/UI/Nav'
import Pattern from '@/components/UI/Pattern'
import LocomotiveScroll from '@/lib/locomotive-scroll'

export const metadata = {
    title: 'Mémoire Vive',
}

import '@/styles/app.scss'

export default function AppLayout({ children }) {
    return (
        <AuthProvider>
            <html
                lang="en"
                className={`${neuebit.variable} ${inter.variable} font-sans`}
            >
                <body>
                    <LocomotiveScroll>
                        {/* <Pattern /> */}
                        <Nav />
                        <main className="relative z-[10]">{children}</main>
                    </LocomotiveScroll>
                </body>
            </html>
        </AuthProvider>
    )
}
