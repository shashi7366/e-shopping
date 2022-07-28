const express =require("express");
const dao =require('./user.dao');

const router=require('express').Router();

router.route('/register').post(dao.registerUser);

router.route('/login').post(dao.loginUser);

router.route('/password/forgot').post(dao.forgotPassword);

router.route('/password/reset/:token').put(dao.resetPassword);

router.route('/logout').get(dao.logout);

module.exports=router;
