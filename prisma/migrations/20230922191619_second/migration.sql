/*
  Warnings:

  - Added the required column `vendor` to the `Bikes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bikes" ADD COLUMN     "vendor" TEXT NOT NULL;
