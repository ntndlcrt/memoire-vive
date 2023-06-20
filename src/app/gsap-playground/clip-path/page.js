'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Page() {
    const containerRef = useRef(null)
    const elementRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        let ctx = gsap.context((self) => {
            gsap.set(elementRef.current, {
                clipPath: 'inset(12vw 4.5vw round 2.22vw)',
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top top',
                    end: '+=100%',
                    scrub: true,
                    pin: true,
                },
            })

            tl.to(elementRef.current, {
                clipPath: 'inset(0vw 0vw round 0vw)',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <section className="h-screen my-[50vh]">HELLO</section>
            <section ref={containerRef}>
                <div
                    ref={elementRef}
                    className="h-screen bg-red-500 flex items-center justify-center"
                >
                    WORLD
                </div>
            </section>
            <section className="h-screen my-[50vh]">Goodbye</section>
        </>
    )
}
