import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productRoute from '../router/home';
import categoryRoute from '../router/category';
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// route
app.use("/api",productRoute);
app.use("/api",categoryRoute);


// connnect database
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
   app.get('/',(req,res,next)=>{
       res.json('Home')
   }) 
// connection
const PORT = 2002;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})
