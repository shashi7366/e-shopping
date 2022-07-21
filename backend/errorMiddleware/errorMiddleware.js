module.exports=(err,req,res,next)=>{
    const errorMessage=err.message || false;
    const errorStatusCode=err.statusCode || 500;

    res.status(errorStatusCode).json({
        message:errorMessage,
        err
    });
}