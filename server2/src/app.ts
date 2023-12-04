import express from 'express'
import { userLoginRouter } from './route'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = 3400

// ============ MIDDLEWARE CONFIGURATION ============ //
app.use(express.json())

// ============== ROUTER CONFIGURATION =============== //
app.use('/', userLoginRouter)

app.listen(PORT, () => {
    console.log(`server running on port hhtp://localhost:${PORT}`)
})