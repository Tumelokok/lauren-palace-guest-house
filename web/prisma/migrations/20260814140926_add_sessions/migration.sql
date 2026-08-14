/*
  Warnings:

  - You are about to drop the column `booking_date_range` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `SystemSetting` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_UserRoles" DROP CONSTRAINT "_UserRoles_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserRoles" DROP CONSTRAINT "_UserRoles_B_fkey";

-- AlterTable
ALTER TABLE "AuditLog" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "booking_date_range",
ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "HousekeepingTask" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PasswordResetToken" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Permission" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PromoCode" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PromoCodeUsage" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RewardAccount" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RewardDefinition" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RewardRedemption" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RewardTier" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RewardTransaction" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RolePermission" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RoomType" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RoomTypePricing" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "SystemSetting" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "UserPermission" ALTER COLUMN "id" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Session" (
    "id" UUID NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_tokenHash_key" ON "Session"("tokenHash");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "SystemSetting_key_key" ON "SystemSetting"("key");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserRoles" ADD CONSTRAINT "_UserRoles_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserRoles" ADD CONSTRAINT "_UserRoles_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
