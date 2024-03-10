import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FileModule } from 'src/file/file.module';

@Module({
  imports:[PrismaModule, FileModule],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
