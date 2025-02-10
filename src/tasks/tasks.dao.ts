import { OkPacket    } from 'mysql';
import { execute     } from '../services/mysql.connector';
import { Task        } from './tasks.model';
import { taskQueries } from './tasks.queries';

export const readTasks = async () => {
   return execute<Task[]>(taskQueries.readTasks, []);
};

export const readTaskById = async (id: number) => {
    return execute<Task[]>(taskQueries.readTaskById, [id]);
};

export const createTask = async (task: Task) => {
    return execute<OkPacket>(taskQueries.createTask, 
        [task.task, task.dueDate, task.priority]);
};

export const updateTask = async (task: Task) => {
    return execute<OkPacket>(taskQueries.updateTask, 
        [task.task, task.dueDate, task.priority, task.id]);
};

export const deleteTask = async (id: number) => {
    return execute<OkPacket>(taskQueries.deleteTask, [id]);
};
