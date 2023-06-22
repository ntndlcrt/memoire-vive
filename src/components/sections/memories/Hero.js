'use client'

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
        <section ref={containerRef} className="relative bg-black">
            <div className="row flex flex-col items-center justify-center text-center h-screen relative z-40">
                <div className="w-[9.17vw] aspect-square overflow-hidden rounded-[50%] block relative mb-[2.22vw]">
                    <Image
                        src="/images/users/evan.webp"
                        fill={true}
                        alt="Evan fasquelle"
                    />
                </div>
                <span className="mb-[5.55vw] font-bit leading-[1] text-[4vw] uppercase">
                    Evan Fasquelle
                </span>
                <p className="text-[3vw] font-extralight">
                    “ Lorem ipsum dolor sit amet consectetur. Viverra morbi
                    tristique bibendum libero turpis adipiscing ultricies.
                    Placerat ultrices non nunc ultricies. “
                </p>
            </div>
            <div className="absolute inset-0 z-20 mix-blend-overlay fade-out-div">
                <Image
                    src="/images/patterns/auth-signin.webp"
                    fill={true}
                    alt=""
                />
            </div>
            <div
                ref={elementRef}
                className="absolute w-[135vw] h-[135vw] bottom-0 translate-y-[20vw] z-10 -translate-x-1/2 left-1/2"
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
