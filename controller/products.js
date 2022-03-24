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
// // Sinup
// export const signup = async (req, res) => {
//     try {
//         const user = await User(req.body).save();
//         res.json({
//                      message:"Đã thêm tài khoản thành công",
//         data:user})
//     } catch (error) {
//         res.status(400).json({
//             message: "Không thêm được tài khoản "
//         })
//     }
// }
// login
// export const signin = (req, res) => {
//     // lấy dữ liệu gửi lên
//     const countEmail = req.body.email
//     const countPassword = req.body.password
//  // kiểm tra xem dữ liệu đã có trong database chưa
//     User.findOne({
//       email:countEmail,
//       password:countPassword
//     })
//     .then(data=>{
//           if(data){
//                 res.json('Đăng nhập thành công')
//           }  else{
//             res.status(400).json('Sai thông tin tài khoản')
//           }
//     })
//     .catch(err=>{
//          res.status(500).json('Lỗi server')
//     })
// }

// API list sản phẩm


export const list = async (req, res) => { 
    try {
        const products = await Product.find().sort({createAt: -1});
                res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const listUser= async (req, res) => { 
    try {
        const user = await User.find();
        res.json(user);
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
            data:products
        });
    } catch (error) {
        res.status(400).json({
            message: "Không hiển thị được sản phẩm"
        })
    }
}
// cập nhật sản phẩm
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