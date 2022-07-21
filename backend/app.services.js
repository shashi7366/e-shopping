const db=require('./db');
const apiRoutes=require('./api');
const express=require('express');
const errorMiddleware=require('./errorMiddleware/errorMiddleware');

const connectToDatabase=()=>{
    db.createConnection();
}

const middlewareSetup=(app)=>{
    app.use(express.json());
    app.use('/api',apiRoutes);
    app.use(errorMiddleware);
    app.get('/',(req,res)=>{
        res.send("<h1>Welcome to homepage</h1>");
    })
}

module.exports={
    connectToDatabase,middlewareSetup
}