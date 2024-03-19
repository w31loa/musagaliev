import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {

  constructor(private readonly prisma:PrismaService){}

  async create(createCommentDto: CreateCommentDto) {



    return await this.prisma.comment.create({data: createCommentDto });
  }

  async findAllPublished() {
    return  await this.prisma.comment.findMany({
      where:{
        isPublished: true
      },  
      include:{
        request: {
            select:{
              name: true,
              car: {
                select:{
                  title: true,
                  type:{
                    select:{
                      title: true
                    }
                  }
                }
              }
            }
        }
        
      }
    });
  }


  async findAll(){
    return  await this.prisma.comment.findMany({
      include:{
        request: {
            select:{
              name: true,
              car: {
                select:{
                  title: true,
                  type:{
                    select:{
                      title: true
                    }
                  }
                }
              }
            }
        }
        
      }
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async update(id: number) {

    const comment = await this.prisma.comment.findUnique({
      where:{
        id
      }
    })

    if(!comment){
      throw new NotFoundException('Такого отзыва не существует')
    }

    return await this.prisma.comment.update({
      where:{id},
      data: {
        isPublished: true
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.comment.delete({
      where: {id}
    });
  }
}
