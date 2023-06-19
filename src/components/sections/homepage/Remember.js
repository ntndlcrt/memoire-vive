'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Remember() {
    const cardContainerRef = useRef(null)
    const cardRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardContainerRef.current,
                    start: 'top top',
                    scrub: true,
                    pin: true,
                    pinSpacer: true,
                    markers: true,
                    refreshPriority:
                        -cardContainerRef.current.getBoundingClientRect().top,
                },
            })

            tl.fromTo(
                cardRef.current,
                {
                    yPercent: 300,
                },
                {
                    yPercent: 0,
                }
            )
        }, cardContainerRef.current)

        return () => ctx && ctx.revert()
    }, [])

    return (
        <section
            ref={cardContainerRef}
            className="flex items-center justify-center relative"
        >
            <div className="row flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[10]">
                <h2 className="text-[10vw] text-center w-2/3 leading-[0.8] font-bit">
                    REMEMBER YOUR WILDEST MEMORIES
                </h2>
            </div>
            <div
                ref={cardRef}
                className="w-[300px] h-[600px] bg-red-500 relative z-[20]"
            ></div>
        </section>
    )
}
