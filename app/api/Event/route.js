import prisma from "../../../prisma/Prisma";

// export async function GET(req, res) {
//   if (req.method == "GET") {
//     try {
//     } catch (error) {
//     } finally {
//     }
//   }
// }

export async function POST(req, res) {
  const Data = await req.json();
  if (req.method == "POST") {
    try {
      await prisma.user.create({
        data: {
          FirstName: Data.FirstName,
          LastName: Data.LastName,
          email: Data.email,
          Phone: Data.Phone,
          age: Data.Age,
          ProfileName: Data.ProfileName,
          Password: Data.password,
          avatar: Data.email,
          CreatorAccess: {
            create: {
              Name: Data.FirstName,
              Email: Data.Email,
              phone: Data.Phone,
              address: Data.address,
            },
          },
        },
      });
      return Response.json({
        status: 201,
        message: "User Created successfully",
      });
    } catch (error) {
      console.log(error);
      return Response.json({
        status: 400,
        message: "Some Error occured",
        error,
      });
    } finally {
      await prisma.$disconnect();
    }
  }
}
