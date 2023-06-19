import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

import { SignInButton, SignOutButton } from '@/components/AuthButtons'
import Logo from '@/components/Logo'

export default function Nav() {
    return (
        <nav className="w-screen fixed top-0 left-0 pt-[2.5vw] pb-[0.55vw] flex backdrop-blur-[1.2rem] z-[1000]">
            <div className="row grid grid-cols-3 items-end">
                <ul className="flex items-center">
                    <li className="mr-[1.67vw]">
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/gallery" className="flex items-center">
                            <span>Gallery</span>
                            <FiArrowUpRight className="" />
                        </Link>
                    </li>
                </ul>
                <ul className="flex justify-center">
                    <li>
                        <Link href="/">
                            <Logo fontSize={2.5} color="white" />
                        </Link>
                    </li>
                </ul>
                <ul className="flex justify-end">
                    <li>
                        <SignInButton />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
