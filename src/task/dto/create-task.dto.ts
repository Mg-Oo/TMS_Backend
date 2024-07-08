// src/tasks/dto/create-task.dto.ts
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '../interfaces/task.interface';
import { User } from '../../user/interfaces/user.interface';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    summary: string;

    @IsOptional()
    assignee?: User;

    @IsOptional()
    @IsString()
    dueDate: string;

    @IsEnum(Status)
    @IsString()
    status: Status;
}
