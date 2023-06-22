/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "emailVerified",
ADD COLUMN     "birthday" TEXT,
ADD COLUMN     "firstLogin" BOOLEAN DEFAULT true,
ADD COLUMN     "gender" TEXT;
