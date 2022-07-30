const Product=require('./product.entity');
const ApiFeatures=require('../../utils/apiFeatures');

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


const showSearchProducts=async (req,res,next)=>{
   
  
    var apiFeatures=new ApiFeatures(Product.find(),req.query);
    

    apiFeatures.search().then((result)=>{
        console.log('search called');
        return result.filter();
    }).then(async (result2)=>{
        console.log('filter called');
       let data=(await result2.query);
        res.status(200).json({
            message:"success",
            data
        });
    });
    


   
}


module.exports={insertProduct,showProducts,updateProduct,deleteProduct,getIndividualProduct,showSearchProducts}