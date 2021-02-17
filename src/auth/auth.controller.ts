import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {RegisterInterface} from './interface/register.interface';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() registerBody: RegisterDto): Promise<RegisterInterface> {
        return await this.authService.register(registerBody);
    }

    @Post('login')
    async login(@Body() loginBody: LoginDto, @Res() res: Response): Promise<any> {
        const user: any = await this.authService.login(loginBody);
        res.status(HttpStatus.OK).json(user);
    }

}
