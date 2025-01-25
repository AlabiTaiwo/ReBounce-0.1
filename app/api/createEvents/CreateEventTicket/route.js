import { auth } from "../../../../auth";
import prisma from "../../../../prisma/Prisma";

export async function POST(req) {
  const Session = await auth();
  const Data = await req.json();
  if (req.method == "POST") {
    if (Session && Session.user) {
      try {
      } catch (error) {
        return Response.json({
          status: 401,
          message: "An error occured please try again",
          error,
        });
      } finally {
        await prisma.$disconnect();
      }
    }
    return Response.json({
      status: 401,
      message:
        "You're not logged in or you don't have aceess to make this request",
    });
  }
  return Response.json({
    status: 401,
    message: "Wrong request made",
  });
}

export async function GET(req, res) {
  const Session = await auth();
  if (req.method == "GET") {
    if (Session && Session.user) {
      try {
      } catch (error) {
        return Response.json({
          status: 400,
          message: "An error occured please try again",
        });
      } finally {
        await prisma.$disconnect();
      }
    }
  }
  return Response.json({ status: 400, message: "Wrong request made" });
}
