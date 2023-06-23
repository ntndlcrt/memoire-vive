'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Reviews() {
    const customCardRef = useRef(null)

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
                    trigger: customCardRef.current,
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
        }, customCardRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <section
                ref={customCardRef}
                className="h-screen flex items-center justify-center"
            >
                <div>
                    <h1 className="text-[15vw] leading-[1] font-bit text-center">
                        WE REMEMBER YOUR SUPPORT
                    </h1>
                </div>
                <div className="card w-[29.375vw] h-[36.38vw] absolute left-1/2 -translate-x-1/2 top-1/2 bg-[#4A3AFF] z-50 rounded-[2.77vw] flex flex-col justify-center items-center">
                    <h1 className="text-center text-[2vw] leading-[1.2] text-white w-3/4">
                        This memory recovery service exceeded my expectations!
                        They helped me retrieve precious memories.
                    </h1>
                    <p className="text-[2.22vw] uppercase items-center text-center font-bit mt-[2.22vw]">
                        Emily Johnson
                    </p>
                </div>
                <div className="card w-[29.375vw] h-[36.38vw] absolute left-1/2 -translate-x-1/2 top-1/2 bg-[#6B5FFF] z-40 rounded-[2.77vw] flex flex-col justify-center items-center -rotate-[4deg]">
                    <h1 className="text-center text-[2vw] leading-[1.2] text-white w-3/4">
                        I&apos;m incredibly grateful for this memory service.
                        They provided a seamless and efficient experience,
                        allowing me to cherish forgotten moments.
                    </h1>
                    <p className="text-[2.22vw] uppercase items-center text-center font-bit mt-[2.22vw]">
                        Sophia Rodriguez
                    </p>{' '}
                </div>
                <div className="card w-[29.375vw] h-[36.38vw] absolute left-1/2 -translate-x-1/2 top-1/2 bg-[#7d72fa] z-30 rounded-[2.77vw] flex flex-col justify-center items-center -rotate-[8deg]">
                    <h1 className="text-center text-[2vw] leading-[1.2] text-white w-3/4">
                        The memory service delivered exceptional results! Their
                        professional team helped me bringing immense joy and
                        nostalgia
                    </h1>
                    <p className="text-[2.22vw] uppercase items-center text-center font-bit mt-[2.22vw]">
                        Benjamin Martinez
                    </p>
                </div>
            </section>
        </>
    )
}
