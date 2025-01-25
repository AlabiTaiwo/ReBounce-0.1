import prisma from "../../../prisma/Prisma";

export async function POST(req, res) {
  const Data = await req.json();
  if (req.method == "POST") {
    try {
      await prisma.event.create({
        data: {
          name: Data.Name,
          Artist: Data.Artist,
          EventImage: Data.EventImage,
          Descriptiion: Data.Description,
          Address: Data.address,
          Time: Data.Time,
          Tickets: {
            create: [
              { type: "VVIP", price: 30000, AvaliableQuantity: 100 },
              { type: "VIP", price: 20000, AvaliableQuantity: 100 },
              { type: "REGULAR", price: 10000, AvaliableQuantity: 100 },
              { type: "FREE", price: 0, AvaliableQuantity: 100 },
            ],
          },
        },
      });
      Response.json({ status: 201, message: "Event created successfully" });
    } catch (error) {
      console.log(error);
      Response.json({
        status: 400,
        message: "An error occured please try again.",
      });
    } finally {
      await prisma.$disconnect();
    }
  }
}
