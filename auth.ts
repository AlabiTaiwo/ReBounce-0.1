import NextAuth from "next-auth";
import CredentialProviders from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma/Prisma";
import bcrypt from "bcryptjs";

export const { auth, signIn, signOut, handlers } = NextAuth({

type 



  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 20 * 60,
    updateAge: 5 * 60,
  },
  providers: [
    CredentialProviders({
      name: "Credential",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const ComparePassword = await bcrypt.compare(
          credentials.password,
          user.Password
        );
        if (!ComparePassword) {
          return null;
        }
        return {
          id: `${user.Id}`,
          FirstName: user.FirstName,
          email: user.email,
          LastName: user.LastName,
          UserName: user.ProfileName,
          Phone: `${user.Phone}`,
          Access: user.Access,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          Id: user.id,
          FirstName: user.FirstName,
          LastName: user.LastName,
          Phone: user.Phone,
          ProfileName: user.ProfileName,
          Access: user.Access,
        };
      }
      return token;
    },
    async session({ session, token }) {
      const UpdatedUser = await prisma.user.findUnique({
        where: {
          Id: token.Id,
        },
        select: {
          Id: true,
          email: true,
          ProfileName: true,
          FirstName: true,
          LastName: true,
          Phone: true,
          age: true,
          Access: true,
        },
      });
      // if (UpdatedUser) {
      //     session,
      //     user: {
      //       ...session.user,
      //       UpdatedUser,
      //     },

      // } return session;

      return {
        ...session,
        user: {
          ...session.user,
          Id: `${UpdatedUser.Id}`,
          FirstName: UpdatedUser.FirstName,
          LastName: UpdatedUser.LastName,
          UserName: UpdatedUser.UserName,
          Phone: `${UpdatedUser.Phone}`,
          Access: UpdatedUser.Access,

          // Id: token.Id,
          // FirstName: token.FirstName,
          // LastName: token.LastName,
          // UserName: token.UserName,
          // Phone: token.Phone,
          // Access: token.Access,
        },
      };
    },
  },
  pages: {
    signIn: "/SignIn",
    signOut: "http://localhost:3000",
  },
  secret: process.env.AUTH_SECRET,
});
