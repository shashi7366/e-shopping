class ApiFeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString
    }

    async search(){
        console.log(this.queryString);

        

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
        
        console.log(key);
     this.query=this.query.find({...key});

     return this;

        
    }

    async filter(){
        
           
        const removalList=["keyword","page","limit"];
        let queryCopy={...this.queryString};
        console.log(queryCopy);
        
        removalList.forEach((item)=>{delete queryCopy[item]});
       
        let queryString=JSON.stringify(queryCopy);
        queryString=queryString.replace(/\b(gt|lt|gte|lte)\b/g,(key)=>{return `$${key}`});
        queryCopy=JSON.parse(queryString);
        
        this.query=this.query.find(queryCopy);
console.log('hi');
        return this;

        
    }
}

module.exports=ApiFeatures;