import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/components/UI/Logo'

export default function Layout({ children }) {
    return (
        <section className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            <div className="absolute z-40 top-[2vw] left-1/2 -translate-x-1/2">
                <Link href="/">
                    <Logo fontSize={2.5} color="white" />
                </Link>
            </div>
            <div className="row relative z-40">{children}</div>
            <div className="absolute inset-0 z-20 mix-blend-overlay">
                <Image
                    src="/images/patterns/auth-signin.webp"
                    fill={true}
                    alt=""
                />
            </div>
            <div className="fixed z-10 w-[170vw] h-[120vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                    src="/images/gradients/auth-profile.webp"
                    fill={true}
                    alt=""
                />
            </div>
        </section>
    )
}
