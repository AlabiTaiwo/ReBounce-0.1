/*
  Warnings:

  - The primary key for the `Creator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `Password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_CouponId_fkey";

-- DropForeignKey
ALTER TABLE "Events" DROP CONSTRAINT "Events_EventsId_fkey";

-- DropForeignKey
ALTER TABLE "Receipts" DROP CONSTRAINT "Receipts_UserReceiptId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_UserTicketId_fkey";

-- AlterTable
ALTER TABLE "Coupon" ALTER COLUMN "CouponId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Creator" DROP CONSTRAINT "Creator_pkey",
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Creator_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "Creator_Id_seq";

-- AlterTable
ALTER TABLE "Events" DROP CONSTRAINT "Events_pkey",
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "EventsId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Events_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "Events_Id_seq";

-- AlterTable
ALTER TABLE "Receipts" ALTER COLUMN "UserReceiptId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "UserTicketId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
ADD COLUMN     "Password" TEXT NOT NULL,
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "Users_Id_seq";

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_EventsId_fkey" FOREIGN KEY ("EventsId") REFERENCES "Creator"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_UserTicketId_fkey" FOREIGN KEY ("UserTicketId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_CouponId_fkey" FOREIGN KEY ("CouponId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipts" ADD CONSTRAINT "Receipts_UserReceiptId_fkey" FOREIGN KEY ("UserReceiptId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
