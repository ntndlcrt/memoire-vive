'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'

import { PatternHpJoin } from '@/components/UI/Pattern'
import { HpJoin } from '@/components/UI/GradientShapes'

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
                top: '6vw',
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top top',
                    end: '+=25%',
                    scrub: true,
                    pin: true,
                },
            })

            tl.to(elementRef.current, {
                clipPath: 'inset(0vw 0vw round 0vw)',
            })
            tl.to(
                shapesRef.current,
                {
                    top: '0vw',
                },
                '<'
            )
            tl.add(() => {
                gsap.set(elementRef.current, {
                    overflow: 'visible',
                    clipPath: 'none',
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="flex justify-center mb-[38vw]">
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
                    className="absolute top-0 left-0 z-10 w-screen h-[78.6vw] blur-[2.8rem]"
                >
                    <HpJoin />
                </div>
                <div className="absolute inset-0 mix-blend-overlay z-20 overflow-hidden fade-out-div">
                    <PatternHpJoin />
                </div>
            </div>
        </section>
    )
}
