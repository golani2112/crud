const ProductModel=require("../../../model/Product");
const { validationResult } = require('express-validator');
module.exports.createProduct=async (req,res)=>{
    try{
        const errors=validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
      
       const data=await ProductModel.create(req.body) 

       res.status(200).json({msg:"Product create success",data:data}); 
    }
    catch(error){
        console.log("Error in creating product",error);
        res.status(500).json({msg:"Internal server error"});
    }
};   


module.exports.getProduct=async (req,res)=>{
    try{
       const data=await ProductModel.find({});

       res.status(200).json({msg:"Products",data:data}); 
    }
    catch(error){
        console.log("Error in getting product",error);
        res.status(500).json({msg:"Internal server error"});
    } 
};  

module.exports.updateProduct=async (req,res)=>{
    try{
        const data=await ProductModel.findById(req.params.id);
        data.quantity=req.body.quantity;
        const a1=await data.save();
        res.status(200).json({msg:"Update",data:a1}); 

    }catch(error){
        console.log("Error in updating product",error);
        res.status(500).json({msg:"Internal server error"});
    }
}

module.exports.deleteProduct=async (req,res)=>{
    try{
        const success=await ProductModel.findByIdAndDelete(req.params.id);
        if(success){
            res.status(200).send(success);

        }
        else
        {
            res.status(404).send();
        }
    }catch(error){
        console.log("Error in deleting product",error);
        res.status(500).json({msg:"Internal server error"});
    }
}