'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function LocomotiveScrollProvider({ children }) {
    useEffect(() => {
        let locoScroll

        import('locomotive-scroll').then((locomotiveModule) => {
            gsap.registerPlugin(ScrollTrigger)

            locoScroll = new locomotiveModule.default({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true,
                getDirection: true,
            })

            locoScroll.on('scroll', () => {
                ScrollTrigger.update()
            })

            ScrollTrigger.scrollerProxy('.smooth-scroll-gsap', {
                scrollTop(value) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, 0, 0)
                        : locoScroll.scroll.instance.scroll.y
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    }
                },

                pinType: document.querySelector('.smooth-scroll-gsap').style
                    .transform
                    ? 'transform'
                    : 'fixed',
            })

            ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

            ScrollTrigger.refresh()
        })

        window.addEventListener('DOMContentLoaded', () => {
            locoScroll.update()
        })

        window.addEventListener('resize', () => {
            locoScroll.update()
        })
    }, [])

    return (
        <div data-scroll-container>
            <div className="smooth-scroll-gsap">{children}</div>
        </div>
    )
}
