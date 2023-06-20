import Link from 'next/link'
import Image from 'next/image'

// import { HpHero } from '@/components/UI/GradientShapes'
// import { PatternHpHero } from '@/components/UI/Pattern'

export default function Hero() {
    return (
        <section className="w-screen h-screen flex items-center justify-center relative mb-[15vw] bg-black">
            <div className="z-40 flex flex-col items-center row">
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
            <div className="absolute w-[135vw] h-[135vw] bottom-0 translate-y-[20vw]">
                <Image
                    src="/images/gradients/hp-hero.webp"
                    alt="Hero"
                    fill={true}
                />
            </div>
            {/* <div className="absolute top-0 z-[10] blur-[3rem]">
                <HpHero />
            </div>
            <div className="absolute inset-0 mix-blend-overlay z-20 overflow-hidden fade-out-div">
                <PatternHpHero />
            </div> */}
        </section>
    )
}
