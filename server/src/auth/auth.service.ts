import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2'
import { User } from '@prisma/client';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService:UserService,
        private readonly jwtService:JwtService
    ){}

    async login(dto:LoginDto){
        console.log(dto)
        const user = await this.validateUser(dto)
        const token = this.generateToken(user)

        return token
    }
        

    async validateUser(dto:LoginDto){
        const user = await this.userService.findOneByEmail(dto.email)
        if(!user){
            throw new UnauthorizedException('Email or password are wrong') 

        }
        const isPasswordVerify = await argon2.verify(user.password_hash, dto.password)
        if(user && isPasswordVerify){
            return user
        }
        
    }

    async generateToken(user:User){
        const payload = {id:user.id, email:user.email , role:user.role}

        return {
            id: user.id,
            email: user.email,
            role: user.role,
            access_token: this.jwtService.sign(payload)
        }
    }

}
