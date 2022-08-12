const Product=require('./product.entity');
const ErrorHandler=require('../../utils/errorhander');
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
    res.status(200).json({
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
        
        return result.filter();
    }).then(async (result2)=>{
       
       let data=(await result2.query);
        res.status(200).json({
            message:"success",
            data
        });
    });
}


const addReview=async (req,res,next)=>{
   
  
    var product=await Product.find({_id:req.params.id});
    
    var oldReviewArray=product[0].reviews;
    var oldRating=product[0].rating;
    var oldNumberofRatings=product[0].noOfRatings;
    var newNumberOfRatings=oldNumberofRatings+1;
    var newRating=((oldRating*oldNumberofRatings)+req.body.review.rating)/newNumberOfRatings;
    
    var newReviewArray=[...oldReviewArray,req.body.review];
    
    await Product.findByIdAndUpdate(req.params.id,{$set:{reviews:newReviewArray,rating:newRating,noOfRatings:newNumberOfRatings}});
    var product1=await Product.find({_id:req.params.id});

    res.status(200).json({
        message:"success",
        product:product1
    });
}




module.exports={insertProduct,showProducts,updateProduct,deleteProduct,getIndividualProduct,showSearchProducts,addReview}