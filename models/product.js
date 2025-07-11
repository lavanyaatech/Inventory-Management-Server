const mongoose=require('mongoose')
const FoodSchema=new mongoose.Schema({
    productName:{type:String,required:true},
    description:{type:String,required:true},
})

const Food=mongoose.model('product',productSchema)
module.exports=product;