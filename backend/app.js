const express=require('express');
const appServices=require('./app.services');

const app=express();

appServices.connectToDatabase();
appServices.middlewareSetup(app);



module.exports=app;