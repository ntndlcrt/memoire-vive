'use client'

import { useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Remember() {
    const { scroll } = useLocomotiveScroll()
    const cardContainerRef = useRef(null)
    const cardRef = useRef(null)

    useEffect(() => {
        let ctx
        if (scroll) {
            const element = scroll?.el
            scroll.on('scroll', ScrollTrigger.update)
            scroll.on('scroll', () => {
                console.log(scroll.scroll.instance.scroll.y)
            })

            ScrollTrigger.scrollerProxy(element, {
                scrollTop(value) {
                    return arguments.length
                        ? scroll.scrollTo(value, {
                              duration: 0,
                              disableLerp: true,
                          })
                        : scroll.scroll.instance.scroll.y
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    }
                },
                pinType: element.style.transform ? 'transform' : 'fixed',
            })
            ScrollTrigger.addEventListener('refresh', () => scroll?.update())

            ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    defaults: {
                        duration: 1,
                    },
                    scrollTrigger: {
                        trigger: cardContainerRef.current,
                        start: 'top top',
                        end: '+=200%',
                        scrub: true,
                        pin: true,
                        markers: true,
                        scroller: scroll?.el,
                    },
                })

                tl.to(cardRef.current, {
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                })
                ScrollTrigger.refresh()
            }, cardContainerRef.current)
        }
        return () => ctx && ctx.revert()
    }, [scroll])

    return (
        <section
            ref={cardContainerRef}
            className="h-screen flex items-center justify-center relative"
        >
            <div className="row flex justify-center">
                <h2 className="text-[10vw] text-center w-2/3 leading-[0.8] font-bit">
                    REMEMBER YOUR WILDEST MEMORIES
                </h2>
            </div>
            <div
                ref={cardRef}
                className="w-[300px] h-[600px] bg-red-500 absolute left-1/2 -translate-x-1/2"
                style={{
                    top: '100%',
                    transform: 'translate(-50%, 100%)',
                }}
            ></div>
        </section>
    )
}
