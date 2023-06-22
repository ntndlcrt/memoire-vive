/*
  Warnings:

  - You are about to drop the column `refresh_token_expires_in` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "refresh_token_expires_in",
ADD COLUMN     "created_at" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "emailVerified",
ADD COLUMN     "birthday" TEXT,
ADD COLUMN     "gender" TEXT;
