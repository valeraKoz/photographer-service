-- DropForeignKey
ALTER TABLE "FavoritesPhoto" DROP CONSTRAINT "FavoritesPhoto_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Folders" DROP CONSTRAINT "Folders_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_favoritesPhotoId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_foldersId_fkey";

-- AddForeignKey
ALTER TABLE "Folders" ADD CONSTRAINT "Folders_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoritesPhoto" ADD CONSTRAINT "FavoritesPhoto_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_favoritesPhotoId_fkey" FOREIGN KEY ("favoritesPhotoId") REFERENCES "FavoritesPhoto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_foldersId_fkey" FOREIGN KEY ("foldersId") REFERENCES "Folders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
