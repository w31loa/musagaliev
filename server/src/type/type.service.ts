import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { Type } from '@prisma/client';

@Injectable()
export class TypeService {

  constructor(private readonly prisma:PrismaService){}

  async create(createTypeDto: CreateTypeDto) {

    const type = await this.prisma.type.findFirst({where: {title: createTypeDto.title}})

    if(type){
      throw new HttpException('Такой тип уже существует', HttpStatus.BAD_REQUEST)
    }

    return await this.prisma.type.create({data:createTypeDto});
  }

  async findAll() {
    return await this.prisma.type.findMany({
      include:{
        cars: true
      }
    }) ;
  }



  async findOne(id: number) {
    return await this.prisma.type.findUnique({
      where:{
        id
      }
    });
  }

  async  update(id: number, updateTypeDto:Partial<Type>) {
    return  await this.prisma.type.update({where: {id} , data: updateTypeDto });
  }

  async remove(id: number) {
    return await this.prisma.type.delete({
      where : {id}
    });
  }
}
