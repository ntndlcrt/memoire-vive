import Hero from '@/components/sections/homepage/Hero'
import Remember from '@/components/sections/homepage/Remember'
import ScrollText from '@/components/sections/homepage/ScrollText'
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
            <Join />
        </>
    )
}
