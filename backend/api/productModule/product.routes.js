const router=require('express').Router();
const { isAuthenticatedUser, authorizeRoles } = require('../../errorMiddleware/auth');
const dao=require('./product.dao');
                                      
router.post('/new',(req,res,next)=>{
 
 
   isAuthenticatedUser, authorizeRoles("admin"), 
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

                  
router.route('/:id').put( isAuthenticatedUser, authorizeRoles("admin"), dao.updateProduct).delete(isAuthenticatedUser,authorizeRoles("admin"),  dao.deleteProduct).get( dao.getIndividualProduct);

                       
module.exports=router;
                            
   