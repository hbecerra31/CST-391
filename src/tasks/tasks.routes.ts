import { Router } from 'express';
import * as TasksController from './tasks.controller';

const router = Router();
router
    .route('/tasks')
    .get(TasksController.readTasks);

router
    .route('/tasks')
    .post(TasksController.createTask);

router
    .route('/tasks/:id')
    .put(TasksController.updateTask);

router
    .route('/tasks/:id')
    .delete(TasksController.deleteTask);

export default router;