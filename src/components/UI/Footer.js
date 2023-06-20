import Link from 'next/link'

import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillYoutube,
} from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className="bg-black pt-[3.33vw] pb-[15vw] relative overflow-hidden">
            <div className="row flex justify-between items-center">
                <div className="flex items-center child:transition-all child-hover:text-indigo-500">
                    <Link href="/">
                        <AiOutlineInstagram className="w-[1.6vw] h-[1.6vw] mr-[1.11vw]" />
                    </Link>
                    <Link href="/">
                        <AiOutlineTwitter className="w-[1.6vw] h-[1.6vw] mr-[1.11vw]" />
                    </Link>
                    <Link href="/">
                        <AiFillFacebook className="w-[1.6vw] h-[1.6vw] mr-[1.11vw]" />
                    </Link>
                    <Link href="/">
                        <AiFillYoutube className="w-[1.6vw] h-[1.6vw]" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="w-[30vw] grid grid-cols-3 leading-[1.6] child:flex child:flex-col">
                        <div className="child:transition-all child-hover:text-indigo-500">
                            <Link href="/" className="mb-[0.35vw]">
                                Sign in
                            </Link>
                            <Link href="/">Register</Link>
                        </div>
                        <div className="child:transition-all child-hover:text-indigo-500">
                            <Link href="/" className="mb-[0.35vw]">
                                About
                            </Link>
                            <Link href="/">Gallery</Link>
                        </div>
                        <div className="child:transition-all child-hover:text-indigo-500">
                            <Link href="/" className="mb-[0.35vw]">
                                Privacy policy
                            </Link>
                            <Link href="/" className="mb-[0.35vw]">
                                Terms & conditions
                            </Link>
                            <Link href="/">Q&A</Link>
                        </div>
                    </div>
                    <span className="text-indigo-500 text-[0.55vw] ml-[3.33vw]">
                        © 2023 ALL RIGHTS RESERVED
                    </span>
                </div>
            </div>
            <p className="w-screen text-center absolute bottom-[2.75vw] left-1/2 -translate-x-1/2 translate-y-1/2 text-[16.5vw] font-bit uppercase">
                Mémoire vive
            </p>
        </footer>
    )
}
