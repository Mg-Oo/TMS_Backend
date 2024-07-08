import { IsString, IsOptional, IsEnum } from 'class-validator';
import { Status } from '../interfaces/task.interface';
import { User } from '../../user/interfaces/user.interface';

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    summary?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(Status)
    @IsString()
    status?: Status;

    @IsOptional()
    assignee?: User;

    @IsOptional()
    @IsString()
    dueDate?: string;
}
