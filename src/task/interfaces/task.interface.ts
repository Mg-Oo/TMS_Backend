import { Document } from 'mongoose';
import { User } from '../../user/interfaces/user.interface';

export enum Status {
    TODO = 'ToDo',
    INPROGRESS = 'InProgress',
    DONE = 'Done',
}

export interface Task extends Document {
    readonly title: string;
    readonly summary: string;
    readonly description: string;
    readonly status: Status;
    readonly assignee: User;
    readonly dueDate: string;
}
