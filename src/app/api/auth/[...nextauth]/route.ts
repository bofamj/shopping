import prisma from '@/lib/db/prisma'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import { Adapter } from 'next-auth/adapters'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import { env } from '@/lib/zodForEnv'
import { mergeCrt } from '@/lib/cart'
import { PrismaClient } from '@prisma/client'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
  events: {
    async signIn({ user }) {
      await mergeCrt(user.id)
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
