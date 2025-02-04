import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter correct email.' })
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;
}
