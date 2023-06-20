'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Hero() {
    const containerRef = useRef(null)
    const elementRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        let ctx = gsap.context((self) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            })

            tl.to(elementRef.current, {
                yPercent: 4,
                ease: 'none',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="w-screen h-screen flex items-center justify-center relative mb-[15vw] bg-black"
        >
            <div className="z-40 flex flex-col items-center row">
                <h1 className="leading-[0.9] flex flex-col mb-[1.11vw]">
                    <span className="text-[6vw]">Preserve the legacy,</span>
                    <span className="font-bit text-[10vw]">
                        Relive the moment
                    </span>
                </h1>
                <p className="w-1/2 font-light text-center mb-[1.67vw]">
                    Unlock the treasure chest of memories and bring cherished
                    moments back to life with our unique platform.
                </p>
                <Link href="/#about" className="button">
                    Learn more
                </Link>
            </div>
            <div
                ref={elementRef}
                className="absolute w-[135vw] h-[135vw] bottom-0 translate-y-[20vw]"
            >
                <Image
                    src="/images/gradients/hp-hero.webp"
                    alt="Hero"
                    fill={true}
                />
            </div>
        </section>
    )
}
