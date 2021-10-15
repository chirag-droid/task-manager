import Task from '../models/Task.js'

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOne({ _id: taskId })
        if (!task) {
            return res.status(404).json({msg: `No task with id ${taskId} found.`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const updateTask = async (req, res) => {
    try {
        const {id: taskId} = req.params
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
            new: true, runValidators: true
        })
        if (!task) {
            return res.status(404).json({ msg: `No task with id ${taskId} found` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id: taskId} = req.params
        const task = await Task.findOneAndDelete({_id: taskId})
        if (!task) {
            return res.status(404).json({ msg: `No task with id ${taskId} found` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
