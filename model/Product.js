
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    description:{
        type:String, 

    },
    price:{
        type:Number,
        required:true
    }
   
   
},
  {timestamps:true}
);

const Product=mongoose.model("Product",productSchema);

module.exports=Product;
