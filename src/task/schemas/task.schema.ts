import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '../interfaces/task.interface';
import { Document } from 'mongoose';
import { User } from 'src/user/interfaces/user.interface';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    summary: string;

    @Prop({ type: Object })
    assignee?: User;

    @Prop()
    dueDate: string;

    @Prop({ type: String, enum: Status })
    status: Status;
}

export const TaskSchema = SchemaFactory.createForClass(Task).set('versionKey', false);
