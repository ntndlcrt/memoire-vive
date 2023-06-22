import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function PUT(req) {
    const session = await getServerSession(authOptions)
    const currentUserEmail = session.user.email

    const data = await req.json()

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail,
        },
        data,
    })

    return NextResponse.json(user)
}
