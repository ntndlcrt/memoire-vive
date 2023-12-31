'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'

export default function Join() {
    const containerRef = useRef(null)
    const elementRef = useRef(null)
    const shapesRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        let ctx = gsap.context((self) => {
            gsap.set(elementRef.current, {
                clipPath: 'inset(12vw 4.5vw round 2.22vw)',
                overflow: 'hidden',
            })

            gsap.set(shapesRef.current, {
                yPercent: 10,
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top top',
                    end: '+=50%',
                    scrub: 0.5,
                    pin: true,
                },
            })

            tl.to(elementRef.current, {
                clipPath: 'inset(0vw 0vw round 0vw)',
            })
                .to(
                    shapesRef.current,
                    {
                        yPercent: 0,
                    },
                    '<'
                )
                .add(() => {
                    gsap.set(elementRef.current, {
                        overflow: 'visible',
                        clipPath: 'none',
                    })
                })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="flex justify-center mb-[54vw]">
            <div
                ref={elementRef}
                className="w-screen h-screen bg-black flex items-center relative"
                style={{
                    willChange: 'clip-path',
                }}
            >
                <div className="row relative z-40 flex flex-col items-center">
                    <h3 className="leading-[0.9] flex flex-col items-center text-center mb-[1.11vw]">
                        <span className="text-[4vw] font-light">
                            Join our memory
                        </span>
                        <span className="font-bit text-[6.5vw]">
                            revival community
                        </span>
                    </h3>
                    <div className="flex items-center">
                        <Link href="/api/auth/sign-in" className="button">
                            Sign in
                        </Link>
                    </div>
                </div>
                <div
                    ref={shapesRef}
                    className="absolute bottom-0 left-0 -translate-x-[12%] translate-y-1/4 w-[210vw] h-[115vw]"
                >
                    <Image
                        src="/images/gradients/hp-join.webp"
                        alt="Join"
                        fill={true}
                    />
                </div>
            </div>
        </section>
    )
}
