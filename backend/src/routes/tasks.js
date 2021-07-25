import { Router } from 'express';
import {deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask} from '../controllers/tasks'

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/count', getTaskCount); //¿Cuántas tareas hay en total

router.get('/tasks/:id', getTask);

router.post('/tasks', saveTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask); //Actualizar unatarea

export default router