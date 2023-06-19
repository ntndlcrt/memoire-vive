'use client'

import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function LocomotiveScroll({ children }) {
    const containerRef = useRef(null)

    if (typeof window === 'undefined') {
        return (
            <LocomotiveScrollProvider
                options={{
                    smooth: true,
                }}
                watch={[]}
                containerRef={containerRef}
            >
                <div ref={containerRef}>{children}</div>
            </LocomotiveScrollProvider>
        )
    } else {
        return null
    }
}
