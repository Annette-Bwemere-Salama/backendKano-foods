import express from 'express';
import dotenv from "dotenv";
dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())


const server = app.listen(PORT, ()=>{
    console.log(`server is running at thhps ${PORT}`);
})