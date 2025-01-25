import { string } from "zod";
import { CreatorSignUpSchema } from "../../(auth)/CreatorSignUp/type";
import { auth } from "../../../auth";
import prisma from "../../../prisma/Prisma";

export async function POST(req, res) {
  const session = await auth();
  const Data = await req.json();
  if (req.method === "POST") {
    const result = CreatorSignUpSchema.safeParse(Data);
    if (result.success && session && session?.user?.Id) {
      try {
        await prisma.creator.update({
          where: {
            CreatorId: session.user.Id,
          },
          data: {
            Email: Data.Email,
            phone: Data.Phone,
            address: Data.Address,
            Name: Data.Name,
            Status: "PENDING",
            Creator: {
              connect: {
                Id: session.user.Id,
              },
            },
          },
        });
        // await prisma.user.update({
        //   where: {
        //     Id: session.user.Id,
        //   },
        //   data: {
        //     Access: "CREATOR",
        //     CreatorAccess: {
        //       create: {
        //         Email: Data.email,
        //         phone: Data.Phone,
        //         address: Data.Address,
        //         Name: Data.Name,
        //       },
        //     },
        //   },
        // });
        // await prisma.creator.create({
        //   data: {
        //     Email: Data.email,
        //     phone: Data.Phone,
        //     address: Data.Address,
        //     Name: Data.Name,
        //     CreatorId: session.user.Id,
        //   },
        // });
        return Response.json({
          status: 201,
          message:
            "Your creator access request has being created, please await verifications and approval",
        });
      } catch (error) {
        console.log(error);
        return Response.json({
          status: 400,
          message: "An error occured, Please try again.",
          error,
        });
      } finally {
        await prisma.$disconnect();
      }
    }
  }
  return Response.json({ status: 400, message: "Bad request to server" });
}
