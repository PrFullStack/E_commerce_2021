const mongoose =require('mongoose')

const Product =require('./Product')

const options = { discriminatorKey: 'categorie' };

const Furniture =Product.discriminator('Furniture',new mongoose.Schema({material:String,dimension:String},options))

module.exports= Furniture;