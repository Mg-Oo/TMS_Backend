import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findByTitle(title: string): Promise<Task[]> {
        const regex = new RegExp(title, 'i'); // 'i' for case-insensitive
        return await this.taskModel.find({ title: { $regex: regex } }).exec();
    }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const createdTask = new this.taskModel(createTaskDto);
        return createdTask.save();
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const existingTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();

        if (!existingTask) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        return existingTask;
    }

    async delete(id: string): Promise<void> {
        const result = await this.taskModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found.`);
        }
    }
}
