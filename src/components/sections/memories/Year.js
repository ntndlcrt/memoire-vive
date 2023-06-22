'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

import SoundButton from '@/components/UI/SoundButton'
import Audio from '@/components/UI/Audio'
import MemoryFrom from '@/components/UI/MemoryFrom'

export function FirstYear() {
    const yearContainerRef = useRef(null)
    const yearElementRef = useRef(null)
    const memoriesContainerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const yPercents = [200, -200, -75, 10]

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
        <div className="relative mb-[20vw]">
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
                            <p className="text-[1.25vw] text-gray-600">
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

export function SecondYear() {
    const yearContainerRef = useRef(null)
    const yearElementRef = useRef(null)
    const quoteElementRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
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

            const tlQuote = gsap.timeline({
                scrollTrigger: {
                    trigger: quoteElementRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 0.5,
                },
            })

            // memories.forEach((memory, i) => {
            //     tlMemories.to(
            //         memory,
            //         {
            //             yPercent: yPercents[i],
            //             ease: 'none',
            //         },
            //         '<'
            //     )
            // })
        }, yearContainerRef)
        return () => ctx.revert()
    }, [])

    return (
        <div className="relative">
            {' '}
            <div className="absolute w-[100vw] h-[91.875vw] z-10 top-0 left-0">
                <Image src="/images/gradients/2022.webp" fill={true} alt="" />
            </div>
            <div className="row">
                <div ref={yearContainerRef} className="relative">
                    <span
                        ref={yearElementRef}
                        className="font-bit z-[50] text-center sticky top-[2.22vw] mx-auto block"
                    >
                        2022
                    </span>
                    <div className="h-[50vh]"></div>
                    <div className="relative flex flex-wrap z-50">
                        <div className="w-3/4 mx-auto flex flex-col">
                            <div className="flex items-center justify-between mb-[2.22vw] text-[1.8vw]">
                                <span>Dad say you love 💖</span>
                                <MemoryFrom social="Messenger" />
                            </div>
                            <div className="h-[7vw] px-[3vw] flex items-center justify-between rounded-full relative bg-[#0A091766] shadow-[0_0_10rem_#00000033] backdrop-blur-[4rem] mb-[6.25vw]">
                                <FaPlay className="text-[1.9vw]" />
                                <div className="w-[34vw] h-[4.44vw]">
                                    <Audio />
                                </div>
                                <span className="text-[2.22vw] font-extralight">
                                    01:23
                                </span>
                            </div>
                            <p
                                ref={quoteElementRef}
                                className="text-[2.78vw] font-extralight mb-[3.33vw]"
                            >
                                My dearest daughter, as I sit here contemplating
                                the depths of my love for you, words seem
                                inadequate to express the boundless affection
                                and adoration that fills my heart.
                                <br />
                                <br />
                                From the moment you entered this world, you
                                became the light of my life, the source of my
                                unwavering joy. Watching you grow into the
                                remarkable person you are today has been an
                                extraordinary privilege, and I am forever
                                grateful for the beautiful moments we&apos;ve
                                shared together. Your laughter, your smile, and
                                the warmth of your embrace have the power to
                                heal my soul and remind me of the purest form of
                                love that exists.
                                <br />
                                <br />
                                As your father, I promise to always be there for
                                you, guiding and supporting you through
                                life&apos;s twists and turns. You are my pride,
                                my inspiration, and the embodiment of everything
                                that is good in this world. I love you more than
                                words can convey, my beloved daughter.
                            </p>
                            <span className="text-[4vw] font-bit uppercase">
                                William Davis
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
