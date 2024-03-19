import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}


  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(@Body() createCarDto: CreateCarDto, @UploadedFile()image  ) {
    return this.carService.create(createCarDto, image);
  }

  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(+id);
  }

  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto , @UploadedFile()image?) {
    return this.carService.update(+id, updateCarDto , image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
