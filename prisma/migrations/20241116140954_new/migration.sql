/*
  Warnings:

  - You are about to drop the column `ProfileName` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the column `TicketImage` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `UserTicketId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the `Events` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[CreatorId]` on the table `Creator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[EventId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[type]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `CreatorId` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AvaliableQuantity` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EventId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `upDatedAt` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Access" AS ENUM ('CREATOR', 'USER');

-- CreateEnum
CREATE TYPE "TicketType" AS ENUM ('FREE', 'REGULAR', 'VVIP', 'VIP', 'PREMIUM');

-- DropForeignKey
ALTER TABLE "Events" DROP CONSTRAINT "Events_EventsId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_UserTicketId_fkey";

-- DropIndex
DROP INDEX "Creator_ProfileName_key";

-- DropIndex
DROP INDEX "Ticket_TicketImage_key";

-- DropIndex
DROP INDEX "Ticket_UserTicketId_key";

-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "ProfileName",
ADD COLUMN     "CreatorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "TicketImage",
DROP COLUMN "UserTicketId",
ADD COLUMN     "AvaliableQuantity" INTEGER NOT NULL,
ADD COLUMN     "EventId" TEXT NOT NULL,
ADD COLUMN     "creatAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "type" "TicketType" NOT NULL,
ADD COLUMN     "upDatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Access" "Access" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Events";

-- CreateTable
CREATE TABLE "Event" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Artist" TEXT,
    "EventImage" TEXT NOT NULL,
    "Descriptiion" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Time" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_EventImage_key" ON "Event"("EventImage");

-- CreateIndex
CREATE UNIQUE INDEX "Event_Descriptiion_key" ON "Event"("Descriptiion");

-- CreateIndex
CREATE UNIQUE INDEX "Event_createdById_key" ON "Event"("createdById");

-- CreateIndex
CREATE UNIQUE INDEX "Creator_CreatorId_key" ON "Creator"("CreatorId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_EventId_key" ON "Ticket"("EventId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_type_key" ON "Ticket"("type");

-- AddForeignKey
ALTER TABLE "Creator" ADD CONSTRAINT "Creator_CreatorId_fkey" FOREIGN KEY ("CreatorId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Creator"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_EventId_fkey" FOREIGN KEY ("EventId") REFERENCES "Event"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
