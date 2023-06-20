import { signIn, getCsrfToken, getProviders } from 'next-auth/react'
import Image from 'next/image'

import { ProviderButton } from '@/components/UI/AuthButtons'

const getData = async () => {
    const providers = await getProviders()
    const csrfToken = await getCsrfToken()

    return { providers, csrfToken }
}

export default async function Page() {
    const { providers, csrfToken } = await getData()

    return (
        <section className="h-screen w-screen relative">
            <div className="row flex justify-center h-screen items-center relative z-20">
                <div className="flex flex-col items-center text-center w-[30vw]">
                    <div className="text-[2.7vw] font-bold mb-[1vw] leading-[1] flex flex-col items-center">
                        <span>Let's remember</span>
                        <span className="font-bit text-[4.5vw]">together</span>
                    </div>
                    <p className="text-[1.1vw] text-gray-200 mb-[3vw]">
                        Log in or Register with Google.
                    </p>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <div key={provider.name} className="w-full">
                                <ProviderButton provider={provider} />
                            </div>
                        ))}
                </div>
            </div>
            <div className="absolute w-[190vw] h-[115vw] left-1/2 -translate-x-1/2 bottom-0">
                <Image
                    src="/images/gradients/auth-signin.webp"
                    fill={true}
                    alt=""
                />
            </div>
        </section>
    )
}
