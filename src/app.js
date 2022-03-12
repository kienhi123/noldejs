import express  from "express";
import cors from"cors";
import morgan from 'morgan';

import mongoose from "mongoose";
import productRoute from '../router/home'
const app = express();
     
// middleware
app.use(cors);
app.use(morgan('tiny'));
app.use(express.json())

// router
app.use("/api",productRoute);

// connect databasse
mongoose.connect('mongodb://localhost:27017/web16309')
.then(()=>console.log("Kết nối thành công"))
.catch((error)=>console.log(error))


const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port" , PORT)
})