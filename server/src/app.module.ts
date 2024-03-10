import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { PrismaModule } from './prisma/prisma.module';
import { TypeModule } from './type/type.module';
import { CarModule } from './car/car.module';
import { RequestModule } from './request/request.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [   ServeStaticModule.forRoot({
    rootPath: join(__dirname, '.', 'static'),
    serveRoot: '/files',
  }),UserModule, AuthModule, FileModule, PrismaModule, TypeModule, CarModule, RequestModule],
})
export class AppModule {}
