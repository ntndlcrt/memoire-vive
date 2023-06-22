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
        <div className="w-[25vw] flex flex-col items-center mx-auto">
            <span className="text-[2.78vw] font-bold mb-[2.22vw]">
                Let&apos;s get to know
            </span>
            <Form user={currentUser} />
        </div>
    )
}
