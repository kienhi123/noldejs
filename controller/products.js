// const products = [
//     {id: 1, name: "Product A"},
//     {id: 2, name: "Product B"}
// ];
import mongoose from "mongoose";
const Product = mongoose.model('Product',{name:String})

export const list = (req,res)=>{
    res.json(products);
}

export const read = (req,res)=>{
    res.json(products);
    res.json(products.find(item => item.id == +req.params.id));
}

export const create =  async(req,res)=>{
    try {
        const product = await new Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message:"Không thêm được"
        })
    }
//    const product = req.body
//    res.json(product);
}

export const remove = (req,res)=>{
    res.json(products.filter(item => item.id == +req.params.id));
 }

 export const update = (req,res)=>{
    res.json(products.map(item => item.id == +req.params.id ? req.body:item));
 }