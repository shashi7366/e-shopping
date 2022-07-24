const router=require('express').Router();
const dao=require('./product.dao');
                                      
router.post('/new',(req,res,next)=>{
    dao.insertProduct(req.body)
    .then((data)=>{
        res.status(200).json({
            message:"success",
            data
        })
                                  
    }).catch((err)=>{
        // res.status(err.statusCode).send("error occured my ",err);
        console.log("error inserting data",err.message);
        next();
    })
});
router.route('/').get(dao.showProducts);

                  
router.route('/:id').put(dao.updateProduct).delete(dao.deleteProduct).get(dao.getIndividualProduct);

                       
module.exports=router;
                            
   