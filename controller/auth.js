import User from "../model/user";

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