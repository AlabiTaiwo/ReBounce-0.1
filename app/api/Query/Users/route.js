import prisma from "../../../../prisma/Prisma";
import bcrypt from "bcryptjs";
import { SignUpSchema } from "../../../(auth)/SignUp/type";

// export async function GET(req) {
//   if (req.method === "GET") {
//     try {
//       const data = await prisma.user.findMany();
//       return Response.json(data, { status: 200 });
//     } catch (error) {
//       return Response.json({
//         status: 400,
//         Error: "An error occured please try again",
//         error,
//       });
//     } finally {
//       await prisma.$disconnect();
//     }
//   } else {
//     return Response.json({
//       message: "Wrong request made to server",
//       status: 400,
//     });
//   }
// }

export async function POST(req) {
  const Data = await req.json();
  if (req.method === "POST") {
    const result = SignUpSchema.safeParse(Data);
    if (!result.success) {
      Response.json({ status: 400, message: "wrong request sent to server" });
    }
    if (result.success) {
      console.log(`schema is ${result.success}`);
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
      const existingUserProfileName = await prisma.user.findUnique({
        where: {
          ProfileName: Data.ProfileName,
        },
      });
      if (existingUserEmail?.email == Data.email) {
        return Response.json({
          status: 406,
          message:
            "Email assigned to an existing user, please sign up with another email or login with existing email.",
        });
      } else if (existingUserPhone?.Phone == Data.Phone) {
        return Response.json({
          status: 406,
          message:
            "Phone number assigned to an existing user, please sign up with another number.",
        });
      } else if (existingUserProfileName?.ProfileName == Data.ProfileName) {
        return Response.json({
          status: 406,
          message:
            "Username assigned to an existing user, please sign up with another username.",
        });
      }
      try {
        const HashedPassword = await bcrypt.hash(Data.password, 10);
        await prisma.user.create({
          data: {
            FirstName: Data.FirstName,
            LastName: Data.LastName,
            ProfileName: Data.ProfileName,
            email: Data.email,
            age: Data.Age,
            Phone: Data.Phone,
            Password: HashedPassword,
          },
        });
        return Response.json({
          status: 201,
          message: "User created succesfully",
        });
      } catch (error) {
        console.log(error);
        return Response.json({ error });
      } finally {
        await prisma.$disconnect();
      }
    } else if (result.error) {
      const ServerErrors = Object.fromEntries(
        result.error?.issues?.map((issue) => {
          issue.path[0], issue.message;
        }) || []
      );
      return Response.json({ errors: ServerErrors, status: 400 });
    }
  } else {
    return Response.json({
      message: "wrong request made to server",
      status: 400,
    });
  }
}
