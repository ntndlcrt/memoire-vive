import Hero from '@/components/sections/homepage/Hero'
import Remember from '@/components/sections/homepage/Remember'
import ScrollText from '@/components/sections/homepage/ScrollText'
import About from '@/components/sections/homepage/About'
import Showcase from '@/components/sections/homepage/Showcase'
import Join from '@/components/sections/homepage/Join'

export const metadata = {
    title: 'Mémoire Vive',
}

export default function Home() {
    return (
        <>
            <Hero />
            <Remember />
            <ScrollText />
            <About />
            <Showcase />
            <Join />
        </>
    )
}
