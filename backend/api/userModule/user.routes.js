const express =require("express");
const dao =require('./user.dao');

const router=require('express').Router();

router.route('/register').post(dao.registerUser);


module.exports=router;