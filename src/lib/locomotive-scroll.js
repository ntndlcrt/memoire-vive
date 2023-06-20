'use client'

import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRouter } from 'next/navigation'

export default function LocomotiveScroll({ children }) {
    const containerRef = useRef(null)
    const { asPath } = useRouter()

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                smartphone: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                },
            }}
            watch={[]}
            location={asPath}
            onLocationChange={(scroll) =>
                scroll.scrollTo(0, { duration: 0, disableLerp: true })
            }
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                {children}
            </div>
        </LocomotiveScrollProvider>
    )
}
