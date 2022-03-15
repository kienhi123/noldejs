import mongoose from "mongoose";
const Product = mongoose.model('Product', { name: String ,price:Number,desc:String});
const Blog = mongoose.model('Blog', { name: String ,desc:String,img:String});

export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm "
        })
    }
}
export const addblog = async (req, res) => {
    try {
        const blog = await new Blog(req.body).save();
        res.json(blog)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viêt"
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
            message: "Lỗi không tìm được bài viết"
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
// chi tiết sản phẩm
export const read = async (req, res) => {
    const filter = {_id:req.params.id}
    try {
        const products = await Product.findOne(filter);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Không hiển thị được sản phẩm"
        })
    }
}
// xóa sản phẩm
export const remove = async (req, res) => {
    const conditon = {_id:req.params.id}
    try {
        const product = await Product.findOneAndDelete(conditon);
        res.json({
            message:"Đã xóa thành công",
           
        });
    } catch (error) {
        res.status(400).json({
            message: "Không hiển thị được sản phẩm"
        })
    }
}
export const update = async (req, res) => {
    const conditon = {_id:req.params.id}
    const doc = req.body
    const option = {new:true}
    try {
        const products = await Product.findByIdAndUpdate(conditon,doc,option);
        res.json  (products);
    } catch (error) {
        res.status(400).json({
            message: "Không hiển thị được sản phẩm"
        })
    }
}