'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

import SoundButton from '@/components/UI/SoundButton'

export function FirstYear() {
    const yearContainerRef = useRef(null)
    const yearElementRef = useRef(null)
    const memoriesContainerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const yPercents = [200, -200, -75, 20]

        let ctx = gsap.context((self) => {
            const memories = gsap.utils.toArray('.memory')

            gsap.set(yearElementRef.current, {
                fontSize: '42.22vw',
            })

            const tlYear = gsap.timeline({
                scrollTrigger: {
                    trigger: yearContainerRef.current,
                    start: 'top top',
                    end: '+=25%',
                    scrub: 0.5,
                },
            })

            tlYear.to(yearElementRef.current, {
                fontSize: '2.22vw',
            })

            const tlMemories = gsap.timeline({
                scrollTrigger: {
                    trigger: memoriesContainerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            })

            memories.forEach((memory, i) => {
                tlMemories.to(
                    memory,
                    {
                        yPercent: yPercents[i],
                        ease: 'none',
                    },
                    '<'
                )
            })
        }, yearContainerRef)
        return () => ctx.revert()
    }, [])

    return (
        <div className="relative">
            {' '}
            <div className="absolute h-[192.67vw] w-[54.7vw] z-10 right-0 top-[5vw]">
                <Image src="/images/gradients/2023.webp" fill={true} alt="" />
            </div>
            <div className="row">
                <div ref={yearContainerRef} className="relative">
                    <span
                        ref={yearElementRef}
                        className="font-bit z-[50] text-center sticky top-[2.22vw] mx-auto block"
                    >
                        2023
                    </span>
                    <div className="h-[50vh]"></div>
                    <div
                        className="relative flex flex-wrap"
                        ref={memoriesContainerRef}
                    >
                        <p className="absolute top-0 -right-[6vw] text-[2.22vw] w-[40vw] z-50">
                            Lorem ipsum dolor sit amet consectetur. Viverra
                            morbi tristique.
                        </p>
                        <div className="h-[28vw] w-[28vw] relative z-50 memory">
                            <div className="w-full h-full relative rounded-[1vw] overflow-hidden mb-[3.33vw]">
                                <div className="absolute w-[2.67vw] aspect-square right-[1.11vw] bottom-[1.11vw] z-10 cursor-pointer">
                                    <SoundButton />
                                </div>
                                <Image
                                    src="/images/memories/evan-fasquelle/2023/dusk.png"
                                    fill={true}
                                    alt=""
                                />
                            </div>
                            <p class="text-[1.25vw] text-gray-600">
                                Lorem ipsum dolor sit amet consectetur. Viverra
                                morbi tristique.
                            </p>
                        </div>
                        <div className="w-[44.7vw] h-[30.83vw] relative ml-auto translate-x-[5.2vw] mt-[15.5vw] z-50 memory">
                            <div className="w-full h-full relative rounded-[1vw] overflow-hidden mb-[3.33vw]">
                                <div className="absolute w-[2.67vw] aspect-square right-[1.11vw] bottom-[1.11vw] z-10 cursor-pointer">
                                    <SoundButton />
                                </div>
                                <Image
                                    src="/images/memories/evan-fasquelle/2023/bench.png"
                                    fill={true}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mt-[11.8vw] ml-[19.44vw] relative h-[28vw] w-[28vw] z-50 memory">
                            <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                                <div className="absolute w-[2.67vw] aspect-square right-[1.11vw] bottom-[1.11vw] z-10 cursor-pointer">
                                    <SoundButton />
                                </div>
                                <Image
                                    src="/images/memories/evan-fasquelle/2023/dad.png"
                                    fill={true}
                                    alt=""
                                />
                            </div>
                            <div className="absolute w-[21.53vw] text-[1.8vw] text-gray-600 top-1/2 -translate-y-1/2 -right-[12.92vw] translate-x-full">
                                Lorem ipsum dolor sit amet consectetur. Viverra
                                morbi tristique.
                            </div>
                        </div>
                        <div className="mt-[9.44vw] w-full h-[46vw] relative z-50 memory">
                            <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                                <div className="absolute w-[2.67vw] aspect-square right-[1.11vw] bottom-[1.11vw] z-10 cursor-pointer">
                                    <SoundButton />
                                </div>
                                <Image
                                    src="/images/memories/evan-fasquelle/2023/landscape.png"
                                    fill={true}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
