-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "coverImageKey" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "fileCount" DROP NOT NULL,
ALTER COLUMN "visitCount" DROP NOT NULL;
