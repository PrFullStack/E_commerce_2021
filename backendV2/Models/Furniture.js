const mongoose =require('mongoose')

const Product =require('./Product')

const options = { discriminatorKey: 'category' };

const Furniture =Product.discriminator('Furniture',new mongoose.Schema({material:String,format:String,dimension:String},options))

module.exports= Furniture;