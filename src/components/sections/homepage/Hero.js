import Link from 'next/link'

import { BlurredRing } from '@/components/UI/GradientShapes'

export default function Hero() {
    return (
        <section
            className="w-screen h-screen flex items-center justify-center relative mb-[18vw]"
            data-scroll-section
        >
            <div
                className="z-50 flex flex-col items-center row"
                data-scroll
                data-scroll-speed="-1"
            >
                <h1 className="leading-[0.9] flex flex-col mb-[1.11vw]">
                    <span className="text-[6vw]">Preserve the legacy,</span>
                    <span className="font-bit text-[10vw]">
                        Relive the moment
                    </span>
                </h1>
                <p className="w-1/2 font-light text-center mb-[1.67vw]">
                    Unlock the treasure chest of memories and bring cherished
                    moments back to life with our unique platform.
                </p>
                <Link href="/#about" className="button">
                    Learn more
                </Link>
            </div>
            <div
                className="absolute w-full z-[10]"
                data-scroll
                data-scroll-speed="-2"
                data-scroll-delay="0.01"
            >
                <BlurredRing />
            </div>
        </section>
    )
}
