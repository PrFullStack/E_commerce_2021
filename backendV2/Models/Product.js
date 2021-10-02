const mongoose =require('mongoose')

const options = { discriminatorKey: 'category' };
const ProductSchema=new mongoose.Schema({


  reference: { type: String, required: true,unique:true },
    stock:{type:Number,required:true},
    price:{type:Number,required :true},//
   description:{type:String,required :true},
reduction:{type:Number,required :true},
    title:{type:String,required:true},
     path:{type:Array,required:true},
     brand:{type:String,required:true},
     color:{type:String,required:true},
    creationDate:{type:Object,required:true}
  
},options);





module.exports=mongoose.model('Product',ProductSchema);







