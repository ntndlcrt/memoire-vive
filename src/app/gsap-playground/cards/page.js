'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Page() {
    const containerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const ctx = gsap.context((self) => {
            const cards = gsap.utils.toArray('.card')
            let y = 50

            cards.forEach((card) => {
                gsap.set(card, {
                    yPercent: -y,
                })

                y -= 5
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=200%',
                    pin: true,
                    scrub: 0.5,
                },
            })

            cards.forEach((card) => {
                tl.to(card, {
                    yPercent: -250,
                    ease: 'none',
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <section className="h-screen bg-gray-700">HELLO</section>
            <section ref={containerRef} className="h-screen">
                <div className="card w-[600px] h-[400px] absolute left-1/2 -translate-x-1/2 top-1/2 bg-blue-950 z-50">
                    Test
                </div>
                <div className="card w-[600px] h-[400px] absolute left-1/2 -translate-x-1/2 top-1/2 bg-red-950 z-40">
                    Test
                </div>
                <div className="card w-[600px] h-[400px] absolute left-1/2 -translate-x-1/2 top-1/2 bg-green-950 z-30">
                    Test
                </div>
            </section>
            <section className="h-screen bg-gray-700">WORLD</section>
        </>
    )
}
