import { NextRequest } from "next/server";
import { RecoverySchema } from "../../(auth)/Recovery/type";
import prisma from "../../../prisma/Prisma";
import * as crypto from "node:crypto";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const Data = await req.json();
  if (req.method == "POST") {
    const result = RecoverySchema.safeParse(Data);
    if (result.success) {
      const existingUserEmail = await prisma.user.findUnique({
        where: {
          email: Data.email,
        },
      });
      const existingUserPhone = await prisma.user.findUnique({
        where: {
          Phone: Data.Phone,
        },
      });
      const MatchedUser = await prisma.user.findUnique({
        where: {
          email: existingUserEmail?.email,
          Phone: existingUserPhone?.Phone,
        },
      });
      if (existingUserEmail?.email != Data.email) {
        return Response.json({
          status: 404,
          message: "Email doesn't match any user record.",
        });
      } else if (existingUserPhone?.Phone != Data.Phone) {
        return Response.json({
          status: 404,
          message: "Phone number doesn't match any user record.",
        });
      }
      if (MatchedUser) {
        const NewPassword = crypto.randomBytes(9).toString("base64");
        const HashedNewPassword = await bcrypt.hash(NewPassword, 12);
        try {
          await prisma.user.update({
            where: {
              email: MatchedUser.email,
              Phone: MatchedUser.Phone,
              age: MatchedUser.age,
            },
            data: {
              Password: HashedNewPassword,
            },
          });
          return Response.json({
            status: 200,
            message: `Your new password is: ${NewPassword}`,
          });
        } catch (error) {
          return Response.json({ error });
        } finally {
          await prisma.$disconnect();
        }
      }
    }
  } else {
    return Response.json({ status: 403, message: "Invalid request" });
  }
}
