const router=require('express').Router();
const productRouter=require('./productModule');
const userRouter=require('./userModule');

router.use('/products',productRouter);
router.use('/users',userRouter);

module.exports=router;