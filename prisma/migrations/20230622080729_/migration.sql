/*
  Warnings:

  - You are about to drop the column `birthday` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstLogin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthday",
DROP COLUMN "firstLogin",
DROP COLUMN "gender",
ADD COLUMN     "age" INTEGER,
ADD COLUMN     "emailVerified" TIMESTAMP(3);
