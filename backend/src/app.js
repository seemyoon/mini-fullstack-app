import express from 'express'

import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
import {User} from "./db/userModel.js";

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/users', async (req, res) => {
    const users = await User.find()
    res.json(users)
})


app.post('/users', async (req, res) => {
    const user = await User.create(req.body)
    res.json(user)
})

const connection = async () => {
    let dbCon = false
    while (!dbCon) {
        try {
            console.log('Connecting to DB...')
            await mongoose.connect(process.env.MONGO_URI)
            dbCon = true
            console.log('Database available')
        } catch (error) {
            console.log('Database unavailable, wait 3 sec')
            await new Promise(resolve => setTimeout(resolve, 3000))
        }
    }
}

const start = async () => {
    try {
        await connection()
        await app.listen(process.env.PORT, process.env.HOST)
        console.log(`Server running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
}

start()