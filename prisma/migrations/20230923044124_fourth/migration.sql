/*
  Warnings:

  - Added the required column `image` to the `Bikes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bikes" ADD COLUMN "image" TEXT NOT NULL DEFAULT 'no_image_available';
