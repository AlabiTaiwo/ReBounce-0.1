/*
  Warnings:

  - You are about to drop the column `FirstName` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the `Organizer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[Email]` on the table `Creator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Creator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Creator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "FirstName",
DROP COLUMN "LastName",
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "phone" BIGINT NOT NULL;

-- DropTable
DROP TABLE "Organizer";

-- CreateIndex
CREATE UNIQUE INDEX "Creator_Email_key" ON "Creator"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Creator_phone_key" ON "Creator"("phone");
