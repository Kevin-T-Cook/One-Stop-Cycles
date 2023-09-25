/*
  Warnings:

  - You are about to drop the column `vender` on the `Accessory` table. All the data in the column will be lost.
  - You are about to drop the column `vender` on the `Part` table. All the data in the column will be lost.
  - Added the required column `vendor` to the `Accessory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendor` to the `Part` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accessory" DROP COLUMN "vender",
ADD COLUMN     "vendor" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Part" DROP COLUMN "vender",
ADD COLUMN     "vendor" TEXT NOT NULL;
