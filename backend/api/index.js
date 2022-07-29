const router=require('express').Router();
const productRouter=require('./productModule');
const userRouter=require('./userModule');
const orderRouter=require('./orderModule');

router.use('/products',productRouter);
router.use('/users',userRouter);
router.use('/orders',orderRouter);

module.exports=router;