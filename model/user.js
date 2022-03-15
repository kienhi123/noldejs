import mongoose ,{Schema} from "mongoose";
const productUser = new Schema({
    email:{
        type:String,
        minLength:5,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});
export default mongoose.model('User', productUser);