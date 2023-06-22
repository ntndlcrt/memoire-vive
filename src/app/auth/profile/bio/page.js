import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

import Form from './Form'

export default async function Page() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth/signin')
    }

    const currentUserEmail = session.user.email
    const currentUser = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    })

    return (
        <div className="flex items-center justify-center">
            <div className="w-[44.8vw] flex flex-col items-center text-center">
                <h3 className="leading-[0.9] flex flex-col items-center text-center mb-[2.22vw]">
                    <span className="text-[4vw] font-light">
                        In a few lines
                    </span>
                    <span className="font-bit text-[6.5vw]">who are you ?</span>
                </h3>
                <Form user={currentUser} />
            </div>
        </div>
    )
}
