const mongoose=require('mongoose');
const config=require('../config');


const createConnection=()=>{
    mongoose.connect(config.db_url).then((data)=>{
        console.log("connection success");
    }).catch((err)=>{
        console.log("connection failure ",err);
    });
}


const getConnection=()=>{
    return mongoose;
}

module.exports={createConnection,getConnection}