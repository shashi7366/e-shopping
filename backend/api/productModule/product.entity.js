const mongoose = require('../../db').getConnection();

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter name of product"]
    },
    description: {
        type: String,
        required: [true, "please enter description of product"]
    },
    price: {
        type: Number,
        required: [true, "please enter price of product"],
        maxLength: [8, "price cant be more than 1 crore"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images:[
        {
        public_id:{
            type:String,
            default:"image not available"
        },
        url:{
            type:String,
            required:true
        }
    }
],
noOfRatings:{
    type:Number,
    default:0
},
stock:{
    type:Number,
    required:[true,"please enter stock"],
    maxLength:[4,"cant have more than 1000 items"],
    default:1
},
category:{
    type:String,
    required:[true,"please enter category of product"]
},
reviews:[
    {
        name:{
            type:String,
            required:[true,"enter name of reviewer"]
        },
        rating:{
            type:Number,
            required:[true,"please enter rating value"]
        },
        comment:{
            type:String,
            required:[true,"please enter a comment"]
        }
    }
],
createdAt:{
    type:Date,
    default:Date.now
}
});

module.exports=mongoose.model("Product",productSchema);