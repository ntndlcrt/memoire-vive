import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { prisma } from '@/lib/prisma'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    debug: true,
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/profile/infos', // New users will be directed here on first sign in (leave the property out if not of interest)
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
