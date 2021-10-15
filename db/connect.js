import mongoose from 'mongoose'

const connectDb = (connectionString) => {
    return mongoose.connect(connectionString)
}

export default connectDb
