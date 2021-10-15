import express from 'express'
import {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} from '../controllers/tasks.js'

const router = express.Router()

// app.get('/')       - get all the tasks
// app.post('/')      - create a new task
// app.get('/:id')    - get a single task
// app.patch('/:id')  - update a task
// app.delete('/:id') - delete task

// Setup routes
router.route('/')
    .get(getAllTasks)
    .post(createTask)

router.route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask)

export default router
