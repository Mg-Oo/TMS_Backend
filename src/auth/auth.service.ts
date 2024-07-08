import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private UserService: UserService,
        private jwtService: JwtService,
    ) {}

    async register(user: RegisterUserDto): Promise<{ token: string }> {
        // Check if the email already exists
        const existingUser = await this.UserService.findOne(user.email);
        if (existingUser) {
            throw new ConflictException('This email is already registered.');
        }

        const hashedPassword = bcrypt.hashSync(user.password, 8);
        const authUser = await this.UserService.create({
            ...user,
            password: hashedPassword,
        });

        const token = this.jwtService.sign({ id: authUser.id });
        return { token };
    }

    async login(user: LoginUserDto): Promise<{ token: string }> {
        const authUser = await this.UserService.findOne(user.email);

        if (!authUser) {
            throw new UnauthorizedException('Invalid email or password.');
        }

        if (user.password !== authUser.password) {
            throw new UnauthorizedException('Invalid email or password.');
        }

        const token = this.jwtService.sign({ id: authUser._id });
        return { token };
    }
}
