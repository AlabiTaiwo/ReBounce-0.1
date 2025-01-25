/*
  Warnings:

  - Made the column `CouponImage` on table `Coupon` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ProfileName` on table `Creator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Title` on table `Events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Artist` on table `Events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `EventImage` on table `Events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Descriptiion` on table `Events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ReceiptImage` on table `Receipts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ProfileName` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Coupon" ALTER COLUMN "CouponImage" SET NOT NULL;

-- AlterTable
ALTER TABLE "Creator" ALTER COLUMN "ProfileName" SET NOT NULL;

-- AlterTable
ALTER TABLE "Events" ALTER COLUMN "Title" SET NOT NULL,
ALTER COLUMN "Artist" SET NOT NULL,
ALTER COLUMN "EventImage" SET NOT NULL,
ALTER COLUMN "Descriptiion" SET NOT NULL;

-- AlterTable
ALTER TABLE "Receipts" ALTER COLUMN "ReceiptImage" SET NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "ProfileName" SET NOT NULL;
