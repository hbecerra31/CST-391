import { Request, RequestHandler, Response } from 'express';
import { Task } from './tasks.model';
import * as TaskDao from './tasks.dao';
import { OkPacket } from 'mysql';

export const readTasks: RequestHandler = async (req: Request, res: Response) => {
    try {
        let tasks;
        let id = parseInt(req.query.id as string);

        console.log('id', id);
        if (Number.isNaN(id)) {
            tasks = await TaskDao.readTasks();
        } else {
            tasks = await TaskDao.readTaskById(id);
        }

        res.status(200).json(
            tasks
        );
    } catch (error) {
        console.error('[tasks.controller][readTasks][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when fetching the tasks'
        });
    }
};

export const createTask: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await TaskDao.createTask(req.body);

        console.log('req.body', req.body);

        console.log('task', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[tasks.controller][createTask][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when writing the task'
        });
    }
};

export const updateTask: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);
        if (Number.isNaN(id)) {
            res.status(400).json({ message: "Invalid task ID" });
        }

        const taskData = req.body;
        taskData.id = id; // Ensure ID is passed to the DAO

        const okPacket: OkPacket = await TaskDao.updateTask(taskData);

        console.log('req.body', taskData);

        console.log('task', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[tasks.controller][updateTask][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when updating the task'
        });
    }
};

export const deleteTask: RequestHandler = async (req: Request, res: Response) => {
    try {
        let id = parseInt(req.params.id as string);

        console.log('id', id);
        if (Number.isNaN(id)) {
            throw new Error("Interger expected for id");
        } else {
            const response = await TaskDao.deleteTask(id);

            res.status(200).json(
                response
            );
        }

    } catch (error) {
        console.error('[tasks.controller][deleteTask][Error]: ', error);
        res.status(500).json({
            message: 'There was an error when deleting the task'
        });
    }
};