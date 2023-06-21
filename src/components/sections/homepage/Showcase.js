'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

export default function Showcase() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const showcaseRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        let ctx = gsap.context((self) => {
            gsap.set(titleRef.current, {
                yPercent: 0,
            })
            gsap.set(textRef.current, {
                yPercent: 0,
            })
            gsap.set(showcaseRef.current, {
                xPercent: 50,
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            })

            tl.to(titleRef.current, {
                yPercent: -75,
            })
            tl.to(
                textRef.current,
                {
                    yPercent: 75,
                },
                '<'
            )
            tl.to(
                showcaseRef.current,
                {
                    xPercent: -50,
                },
                '<'
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="mb-[55vw]">
            <div className="row relative pb-[10.42vw] mb-[5vw] z-40">
                <div
                    ref={titleRef}
                    className="flex items-center text-[5vw] leading-[1.1] whitespace-nowrap flex-wrap"
                >
                    <span>Indulge in</span>
                    <span className="font-bit text-[7.5vw] ml-[1.5vw] leading-[0] translate-y-[0.4vw]">
                        unforgettable
                    </span>
                    <span>moments of others.</span>
                </div>
                <p
                    ref={textRef}
                    className="absolute -right-[8vw] bottom-[5vw] w-[29vw]"
                >
                    Immerse yourself in an immersive experience where you can
                    indulge in the unforgettable moments lived by others.
                    Discover their captivating stories, thrilling adventures,
                    and memorable memories that will transport you to a world
                    filled with emotions and wonder.
                </p>
            </div>
            <div
                ref={showcaseRef}
                className="w-[125.6vw] h-[34.6vw] relative mb-[5vw] z-40"
            >
                <Image
                    src="/images/pictures/showcase.webp"
                    fill={true}
                    alt=""
                />
            </div>
            <div className="row flex justify-center relative z-40">
                <Link href="/gallery" className="button">
                    Browse the gallery
                </Link>
            </div>
        </section>
    )
}
