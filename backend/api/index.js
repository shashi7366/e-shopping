const router=require('express').Router();
const productRouter=require('./productModule');

router.use('/products',productRouter);

module.exports=router;