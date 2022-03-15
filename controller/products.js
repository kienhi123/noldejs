import Product from "../model/model";
import User from "../model/user"
// thêm sản phẩm
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

export const adduser = async (req, res) => {
    try {
        const user = await User(req.body).save();
        res.json(user)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được tài khoản "
        })
    }
}

// API list sản phẩm


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
    const filter = {_id:req.params.id}
    try {
        const products = await Product.findByIdAndDelete(filter);
        res.json({
            message:"Đã xóa thành công",
            data:product
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