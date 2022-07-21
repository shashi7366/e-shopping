const app=require('../app');
const config=require('../config');

app.listen(config.www_PORT,()=>{
    console.log("app is running in port ",config.www_PORT);
})