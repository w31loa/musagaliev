import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RequestService {
  
  constructor(private readonly prisma:PrismaService){}
  
  async create(createRequestDto: Prisma.RequestCreateInput) {

    const req = await this.prisma.request.create({data: createRequestDto})

    return req;
  }

  async findAll() {
    return  await this.prisma.request.findMany({
      include:{
        car: true,
        comment: true
      },
      orderBy:{
        status: 'desc'
      }
    });
  }

  findOne(id: number) {
    return 0;
  }

  async findOneByUser(userId:number){
    return await this.prisma.request.findMany({
      where:{
        userId
      },
      include:{
        car: true,
        comment: true
      }
    })
  }

  async update(id: number, updateRequestDto: Prisma.RequestUpdateInput) {
    return await this.prisma.request.update({
      where:{
        id
      },
      data: updateRequestDto
    });
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
