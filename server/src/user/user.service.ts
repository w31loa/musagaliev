import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2'
import { $Enums } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(private readonly prisma:PrismaService){}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.findOneByEmail(createUserDto.email)

    if(existUser){
      throw new HttpException('Аккаунт уже существеут!', HttpStatus.BAD_REQUEST)
    }

    const data = {
      email: createUserDto.email,
      password_hash: await argon2.hash(createUserDto.password)
    } 
    const newUser = await this.prisma.user.create({data})
    return newUser;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email:string){
    return await this.prisma.user.findUnique({where: {email} })

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  async onModuleInit() {
    const admin = await this.prisma.user.findFirst({where: {
      role: "ADMIN"
    } })

    if(!admin){
      const data = {
        email: "admin@mail.com",
        password_hash: await argon2.hash('root'),
        role:"ADMIN" as $Enums.Role

      }

      const newAdmin = await this.prisma.user.create({data})

      console.log(newAdmin)
    }

    console.log(admin)

  }
}
