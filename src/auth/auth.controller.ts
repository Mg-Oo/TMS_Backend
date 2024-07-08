import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body(new ValidationPipe()) registerUserDto: RegisterUserDto): Promise<{ token: string }> {
        return this.authService.register(registerUserDto);
    }

    @Post('login')
    async login(@Body(new ValidationPipe()) loginUserDto: LoginUserDto): Promise<{ token: string }> {
        return this.authService.login(loginUserDto);
    }
}
