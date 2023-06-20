'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Remember() {
    const containerRef = useRef(null)
    const cardRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(cardRef.current, {
                yPercent: 100,
                top: '100%',
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'center center',
                    end: '+=100%',
                    scrub: true,
                    pin: true,
                    markers: true,
                    scroller: '.smooth-scroll-gsap',
                    refreshPriority: 1,
                },
            })

            tl.to(cardRef.current, {
                yPercent: -50,
                top: '50%',
            })
        }, containerRef.current)

        return () => ctx.revert()
    }, [])

    return (
        <section
            data-scroll-section
            ref={containerRef}
            className="relative py-[10vw] mt-[30vw] flex items-center justify-center"
        >
            <div className="row flex justify-center">
                <h2 className="text-[10vw] text-center w-2/3 leading-[0.8] font-bit">
                    REMEMBER YOUR WILDEST MEMORIES
                </h2>
            </div>
            <div
                ref={cardRef}
                className="w-[300px] h-[600px] bg-red-500 absolute left-1/2 -translate-x-1/2"
            ></div>
        </section>
    )
}
