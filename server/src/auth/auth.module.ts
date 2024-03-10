import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
          imports:[ConfigModule],
          useFactory: (configService:ConfigService)=>({
            secret: configService.get('JWT_SECRET'),
            signOptions: {expiresIn: '30d'}
          }),
          inject:[ConfigService]
    }),

    UserModule,

    PassportModule ,

    ConfigModule



  ]
  
  ,
  controllers: [AuthController],


  providers: [AuthService , LocalStrategy, JwtStrategy]
})
export class AuthModule {}
