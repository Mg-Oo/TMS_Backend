import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async create(user: any): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.userModel.findOne({ email }).exec();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
