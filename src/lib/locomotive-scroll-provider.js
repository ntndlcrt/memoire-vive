'use client'

import { useEffect } from 'react'

export default function LocomotiveScrollProvider({ children }) {
    useEffect(() => {
        let scroll

        import('locomotive-scroll').then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true,
                getDirection: true,
            })

            // scroll.on('scroll', (instance) => {
            //     document.documentElement.setAttribute(
            //         'data-direction',
            //         instance.direction
            //     )
            // })
        })

        window.addEventListener('DOMContentLoaded', () => {
            scroll.update()
        })

        window.addEventListener('resize', () => {
            scroll.update()
        })

        return () => {
            if (scroll) scroll.destroy()
        }
    }, [])

    return <div data-scroll-container>{children}</div>
}
