"use server";
import prisma from "@/prisma/Prisma";

export default async function AddUser(FormData) {
  const FirstName = FormData.get("FirstName");
  const LastName = FormData.get("LastName");
  const ProfileName = FormData.get("ProfileName");
  const Email = FormData.get("Email");
  const Password = FormData.get("Password");

  await prisma.users.create({
    data: {
      FirstName: FirstName,
      LastName: LastName,
      ProfileName: ProfileName,
      email: Email,
      Password: Password,
    },
  });
}
