import mongoose from "mongoose";
const Product = mongoose.model('Product', { name: String ,price:Number,desc:String});
const Blog = mongoose.model('Blog', { name: String ,desc:String,img:String});

export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
export const addblog = async (req, res) => {
    try {
        const blog = await new Blog(req.body).save();
        res.json(blog)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list sản phẩm
export const listblog = async (req, res) => { 
    try {
        const blog = await Blog.find();
        res.json(blog);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// list blog
export const list = async (req, res) => { 
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
}

export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
}