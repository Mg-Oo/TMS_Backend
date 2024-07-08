import { Controller, UseGuards, Get, Post, Patch, Param, Body, ValidationPipe, Query, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Task } from './schemas/task.schema';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.taskService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('search')
    async searchTasks(@Query('title') title: string): Promise<Task[]> {
        return this.taskService.findByTitle(title);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) updateTaskDto: UpdateTaskDto) {
        return this.taskService.update(id, updateTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteTask(@Param('id') id: string): Promise<void> {
        await this.taskService.delete(id);
    }
}
