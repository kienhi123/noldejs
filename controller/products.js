import Product from "../model/model";
// thêm sản phẩm
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save(); // Nhận dữ liệu từ cailent nên server,save là thực thi câu lệnh
        console.log('product',product)
        res.json(product)    // Trả về dữ lệu vừa nhận được 
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm "
        })
    }
}
export const list = async (req, res) => { 
    try {
        const products = await Product.find().sort({createAt: -1});// createAt là thời gian lúc thêm sp, sort là hàm dùng để săp xếp
                res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// chi tiết sản phẩm
export const read = async (req, res) => {
    const filter = {_id:req.params.id} // Lọc id từ url
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
    const docment = req.body
    const option = {new:true} // Cập nhật dữ liệu mới từ cailent gửi nên
    try {
        const products = await Product.findOneAndUpdate(conditon,docment,option);
        res.json  (products);
    } catch (error) {
        res.status(400).json({
            message: "Không hiển thị được sản phẩm"
        })
    }
}
export const search = async ( req,res)=>{
   const Searhstring = req.query.q ? req.query.q:""
   const result = await Product.find({$text:{$search :Searhstring }}).exec();
   res.json(result)
}