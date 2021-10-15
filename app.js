import express from "express"
import tasksRouter from "./routes/tasks.js"
import connectDb from './db/connect.js'
import {config as envConfig} from 'dotenv'

// Create an express app object
const app = express()
const port = 3000

// Use the json middleware
app.use(express.json())
// Static middleware to server static files at public folder
app.use(express.static('./public'))

// Setup routes
app.use('/api/v1/tasks', tasksRouter)

// Setup environment configs from .env
envConfig()

// Connection string where we will connect our mongo databse
const user = process.env.MONGO_USER
const mongoUri = process.env.MONGO_URI
const connectionString = `mongodb+srv://${user}@${mongoUri}/task-manager?retryWrites=true&w=majority`

const start = async () => {
    try {
        await connectDb(connectionString).then(
            console.log(`Connected to the database at ${mongoUri}`)
        )
        app.listen(port, console.log(`Listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
