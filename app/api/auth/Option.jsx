// import prisma from "@/prisma/Prisma";
// import { getServerSession } from "next-auth";

export const AuthOption = {
  session: {
    strategy: "jwt",
  },
  providers: [
    AppleProviders({}),
    Googleproviders({}),
    CredentialsProviders({
      name: "Email",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        const body = await req.json();
        const user = await prisma.users.findUnique({
          where: {
            email: body.email,
            Password: body.password,
          },
        });
        const user = { id: "1", name: "Taiwo", email: "test@gmail.com" };
        return user;
      },
    }),
  ],
};
