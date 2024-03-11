import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Prisma } from '@prisma/client';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() createRequestDto: Prisma.RequestCreateInput ) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  findAll() {


    return this.requestService.findAll();
  }


  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') userId:string) {
    return this.requestService.findOneByUser(+userId);
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: Prisma.RequestUpdateInput) {
    return this.requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
