import express from "express";
const router = express.Router();
import { checkAuth } from "../middeawe/checkAuth";
const check = (req, res, next) => {
    const status = true;
    if(status) {
    console.log("Chào sếp");
    next();
    } else {
        console.log("Anh không có quyền truy cập");
    }
 }

 router.post('/products/:id', checkAuth, (req, res) => {
     console.log(req.body)
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    products.push(req.body);
    res.json(products);

 })

 router.get('products/:id', checkAuth, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
   
    res.json(product.find(item => item.id === +req.params.id));
 })
 router.post('/products', checkAuth, (req, res) => {
    console.log(req.body)
   const products = [
       {id: 1, name: "Product A"},
       {id: 2, name: "Product B"}
   ];
   products.push(req.body);
   res.json(products);
})

router.delete('/products/:id', checkAuth, (req, res) => {
    
   const products = [
       {id: 1, name: "Product A"},
       {id: 2, name: "Product B"}
   ];
   
   res.json(products.filter(item => item.id == +req.params.id));
})


export default router;
