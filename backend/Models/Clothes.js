const mongoose =require('mongoose')

const Product =require('./Product')

const options = { discriminatorKey: 'category' };
const Clothes =Product.discriminator('Clothes',new mongoose.Schema({size:String,fabric:String},options))

module.exports= Clothes;