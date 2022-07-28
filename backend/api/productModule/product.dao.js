const Product=require('./product.entity');

const insertProduct=(product)=>{


    return product=  Product.create(product);
}

const showProducts=async (req,res,next)=>{
   var products = await Product.find();

   if(!products){
    res.status(403).json({
        message:'no product found'
    })
   }else{
    res.status(403).json({
        message:'success',
        products
    })
   }
}

const updateProduct=async (req,res,next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        res.status(500).json({
            message:"product not found"
        });
       
    }
    else{
        await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            useValidators:true,
            useFindAndModify:false
        });

        res.status(200).json({
            message:"success"
        });

    }
}

const deleteProduct=async (req,res,next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        res.status(500).json({
            message:"product not found"
        });
    }
    else{
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"success"
        });

    }
}

const getIndividualProduct=async (req,res,next)=>{
    const product=await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("product not found",403));
    }

    res.status(200).json({
        message:"success",
        product
    })

}


module.exports={insertProduct,showProducts,updateProduct,deleteProduct,getIndividualProduct}