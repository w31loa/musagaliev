import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Car } from '@prisma/client';
import { FileService } from 'src/file/file.service';

@Injectable()
export class CarService {

  constructor(private readonly prisma:PrismaService,
              private readonly file: FileService){}

  async create(createCarDto: CreateCarDto , image) {

    createCarDto.typeId = +createCarDto.typeId

    const type = await this.prisma.type.findUnique({
      where: {id: createCarDto.typeId}
    })

    if(!type){
      throw new HttpException('Такого типа нет', HttpStatus.BAD_REQUEST)
    }



    const car = await this.prisma.car.findFirst({
      where:{
        title: createCarDto.title
      }
    })

    if(car){
      throw new HttpException('Такая техника уже существует', HttpStatus.BAD_REQUEST)
    }

    const filePath = await this.file.createFile(image, createCarDto.title, type.title)

    createCarDto.img = filePath

    return await this.prisma.car.create({data:createCarDto});
  }

  async findAll() {
    return await this.prisma.car.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  async update(id: number, updateCarDto: Partial<Car> , image) {
   
    const car = await this.prisma.car.findFirst({
      where:{
        id
      }
    })

    const type = await this.prisma.type.findFirst({
      where:{
        cars:{
          some:{
            id:car.id
          }
        }
      }
    })

    if(!car){
      throw new HttpException('Такая техники не существует', HttpStatus.BAD_REQUEST)
    }

    if(image){
      const filePath = await this.file.createFile(image , car.title,type.title  )
      updateCarDto.img = filePath
      console.log(filePath)
    }

    return await this.prisma.car.update({
      where:{
        id
      },
      data:updateCarDto
    });
  }

  async  remove(id: number) {
    return await this.prisma.car.delete({
      where:{
        id
      }
    });
  }
}
