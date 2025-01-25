import { auth } from "../../../../auth";
import prisma from "../../../../prisma/Prisma";

export async function POST(res, req) {
  const Data = await req.json();
  const Session = await auth();
  if (req.method == "POST") {
    if (Session && Session.user?.Access == "CREATOR") {
      try {
        await prisma.event.create({
          data: {
            creatorId: Session.user?.id,
            Name: Data.Name,
          },
        });
        return Response.json({
          status: 201,
          message: "Event created successfully",
        });
      } catch (error) {
        return Response.json({
          status: 400,
          message: "An error occurred",
          error,
        });
      } finally {
        await prisma.$disconnect();
      }
    }
    return Response.json({
      status: 400,
      message: "User is not either not logged in or has no access",
    });
  }
  return Response.json({ status: 400, message: "Wrong request made" });
}
