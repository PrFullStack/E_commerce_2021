const mongoose =require('mongoose')

const Product =require('./Product')

const options = { discriminatorKey: 'category' };
const Computer =Product.discriminator('Computer',new mongoose.Schema({capacity:Number,os:String,screen:String,memory:String,processor:String},options))

module.exports= Computer;