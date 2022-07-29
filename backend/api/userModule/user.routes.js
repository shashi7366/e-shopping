const express =require("express");
const dao =require('./user.dao');
const { isAuthenticatedUser, authorizeRoles } = require('../../errorMiddleware/auth');

const router=require('express').Router();

router.route('/register').post(dao.registerUser);

router.route('/login').post(dao.loginUser);

router.route('/password/forgot').post(dao.forgotPassword);

router.route('/password/reset/:token').put(dao.resetPassword);

router.route('/logout').get(dao.logout);

router.route("/me").get(isAuthenticatedUser, dao.getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, dao.updatePassword);

router.route("/me/update").put(isAuthenticatedUser, dao.updateProfile);

module.exports=router;
