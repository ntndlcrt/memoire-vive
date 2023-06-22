import Image from 'next/image'

import { FirstYear, SecondYear } from './Year'

export default function Years() {
    return (
        <section className="flex flex-col mb-[33vh]">
            <FirstYear />
            <SecondYear />
        </section>
    )
}
