const router=require('express').Router();
const productRouter=require('./productModule');
const userRouter=require('./userModule');
const orderRouter=require('./orderModule');
const paymentRouter=require('./paymentModule')


router.use('/products',productRouter);
router.use('/users',userRouter);
router.use('/orders',orderRouter);
router.use('/payments',paymentRouter);


module.exports=router;