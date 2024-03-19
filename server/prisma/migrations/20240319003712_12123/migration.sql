-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_typeId_fkey";

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
