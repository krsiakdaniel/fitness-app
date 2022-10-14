import Mongoose from 'mongoose'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(__dirname, '../../../', '.env.local')});

let database: Mongoose.Connection

export const connect = () => {
    const database_uri = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27020/fitness_tracker'
    console.log('from conenct process.env.MONGO_CONNECTION_STRING :::', database_uri)

    if(database)
        return

    Mongoose.connect(database_uri)

    database = Mongoose.connection

    database.once('open', async () => {
        console.log('connected to database...')
    })

    database.on('error', () => console.log('Error connecting to database!'))
}

export const disconnect = () => {
    if(!database)
        return

    Mongoose.disconnect()

    database.once('close', async () => console.log('Disconnected from the database'))
}