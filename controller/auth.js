import User from "../model/user";
// Đăng kí
export const signup = async (req,res) => {
    const {email,name,password}=  req.body
    try {
        const exitUser = await User.findOne({email}).exec();
        if(exitUser){
           res.json({
               message:"Email của bạn đã tồn tại"
           })
        };
        const user = await new User({email,name,password}).save();
        res.json({
            user:{
                _id :user._id,
                email:user.email,
                name:user.name
            }
        })
    } catch (error) {
        
    }
}
// Đăng nhập

export const signin = async (req,res)=>{
    const {email,password}= req.body;


    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message:"Email đã tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message:"Sai thông tin mật khẩu"
            })
        }

    res.json({
        message:"Bạn đã đăng nhập thành công",
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        }
    })
    } catch (error) {
        
    }
}
