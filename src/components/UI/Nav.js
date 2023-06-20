'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

import { SignInButton, SignOutButton } from '@/components/UI/AuthButtons'
import Logo from '@/components/UI/Logo'
import MousePosition from '@/utils/MousePosition'

export default function Nav() {
    const containerRef = useRef(null)
    const mousePosition = MousePosition()
    const mouse = useRef({ x: 0, y: 0 })
    const containerSize = useRef({ w: 0, h: 0 })

    useEffect(() => {
        initContainer()
        window.addEventListener('resize', initContainer)

        return () => {
            window.removeEventListener('resize', initContainer)
        }
    }, [])

    useEffect(() => {
        onMouseMove()
    }, [mousePosition])

    const initContainer = () => {
        if (containerRef.current) {
            containerSize.current.w = containerRef.current.offsetWidth
            containerSize.current.h = containerRef.current.offsetHeight
        }
    }

    const onMouseMove = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            const { w, h } = containerSize.current
            const x = mousePosition.x - rect.left
            const y = mousePosition.y - rect.top
            const inside = x < w && x > 0 && y < h && y > 0
            if (inside) {
                mouse.current.x = x
                mouse.current.y = y

                const navX =
                    -(
                        containerRef.current.getBoundingClientRect().left -
                        rect.left
                    ) + mouse.current.x
                const navY =
                    -(
                        containerRef.current.getBoundingClientRect().top -
                        rect.top
                    ) + mouse.current.y
                containerRef.current.style.setProperty('--mouse-x', `${navX}px`)
                containerRef.current.style.setProperty('--mouse-y', `${navY}px`)
            }
        }
    }

    return (
        <nav
            ref={containerRef}
            className="w-screen fixed top-0 left-0 flex backdrop-blur-[1.2rem] z-[1000] overflow-hidden group"
        >
            <div className="w-full pt-[2vw] pb-[1vw] relative h-full rounded-3xl p-px before:absolute before:w-80 before:bg-[#AFA7FF99] before:h-80 before:-left-40 before:-top-40 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-20 before:blur-[100px]">
                <div className="row grid grid-cols-3 items-end relative z-30">
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
                <div className="absolute z-10 w-full h-[0.1rem] left-0 bottom-0 bg-gray-400 opacity-20"></div>
            </div>
        </nav>
    )
}
