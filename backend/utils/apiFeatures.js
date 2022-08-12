class ApiFeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString
    }

    async search(){
        if (typeof this.queryString.keyword == 'undefined'){
            var key={};
        }
       else{
        var key=this.queryString?{
            name:{
                $regex:this.queryString.keyword,
                $options:"i"
            }
        }:{};
    }
        
       
     this.query=this.query.find({...key});

     return this;

        
    }

    async filter(){
        
           
        const removalList=["keyword","page","limit"];
        let queryCopy={...this.queryString};
        
        
        removalList.forEach((item)=>{delete queryCopy[item]});
       
        let queryString=JSON.stringify(queryCopy);
        queryString=queryString.replace(/\b(gt|lt|gte|lte)\b/g,(key)=>{return `$${key}`});
        queryCopy=JSON.parse(queryString);
        
        this.query=this.query.find(queryCopy);

        return this;

        
    }
}

module.exports=ApiFeatures;