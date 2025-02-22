/*
  Warnings:

  - The `size` column on the `Folders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `size` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `compressedSize` on the `Photo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `originalSize` on the `Photo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Folders" DROP COLUMN "size",
ADD COLUMN     "size" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "compressedSize",
ADD COLUMN     "compressedSize" INTEGER NOT NULL,
DROP COLUMN "originalSize",
ADD COLUMN     "originalSize" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "size",
ADD COLUMN     "size" INTEGER DEFAULT 0;
