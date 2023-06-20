'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Remember() {
    const containerRef = useRef(null)
    const elementRef = useRef(null)
    const elementPixelRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context((self) => {
            gsap.set(elementRef.current, {
                yPercent: 200,
            })

            gsap.set(elementPixelRef.current, {
                clipPath: 'inset(0% 0% 0% 0%)',
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=50%',
                    scrub: 0.5,
                    pin: true,
                },
            })

            tl.to(elementRef.current, {
                yPercent: -50,
            })
            tl.to(elementPixelRef.current, {
                clipPath: 'inset(0% 0% 0% 100%)',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="mb-[30vw]">
            <div className="row flex justify-center h-screen items-center relative z-10">
                <h2 className="text-[10vw] text-center w-2/3 leading-[0.8] font-bit">
                    REMEMBER YOUR WILDEST MEMORIES
                </h2>
            </div>
            <div
                ref={elementRef}
                className="w-[24.5vw] h-[36.5vw] absolute left-1/2 top-1/2 -translate-x-1/2 z-20 rounded-[0.5vw] overflow-hidden"
            >
                <div className="absolute inset-0 z-50" ref={elementPixelRef}>
                    <Image
                        src="/images/pictures/lamp-post-pixel.webp"
                        alt=""
                        fill={true}
                    />
                </div>
                <Image
                    src="/images/pictures/lamp-post.webp"
                    alt=""
                    fill={true}
                />
            </div>
        </section>
    )
}
