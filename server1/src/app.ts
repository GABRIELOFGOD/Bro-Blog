import cors from 'cors'
import express from "express";
import { userRouter } from "./routes";
const app = express();
const PORT = 3300;
import dotenv from 'dotenv'
dotenv.config()

app.use(cors())

// ====== MIDDLEWARES CONFIGURATION ========== //
app.use(express.json())

app.use('/', userRouter)

app.listen(PORT, ()=>{
    console.log(`server listening at http://localhost:${PORT}`)
})

