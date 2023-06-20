'use client'

import { useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function Remember() {
    const { scroll } = useLocomotiveScroll()

    return (
        <section className="flex flex-col items-center" data-scroll>
            <div className="row flex justify-center h-screen items-center">
                <h2 className="text-[10vw] text-center w-2/3 leading-[0.8] font-bit">
                    REMEMBER YOUR WILDEST MEMORIES
                </h2>
            </div>
        </section>
    )
}
