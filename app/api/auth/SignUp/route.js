import prisma from "../../../../prisma/Prisma";

export async function POST(req) {
  const body = await req.json();
  if (req.method === "POST") {
    try {
      await prisma.user.create({
        data: {
          FirstName: body.FirstName,
          LastName: body.LastName,
          email: body.email,
          Phone: body.Phone,
          age: body.Age,
          Password: body.ConfirmPassword,
        },
      });
      return Response.json(
        { status: 201 },
        { messgae: "User created succefully" }
      );
    } catch (error) {
      return Response.json(
        { status: 400 },
        { message: "An error occured, please try agian" }
      );
    } finally {
      await prisma.$disconnect();
    }
  }
  return Response.json(
    { statu: 402 },
    { messsge: "Wrong request sent to server" }
  );
}
