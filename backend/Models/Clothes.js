const mongoose =require('mongoose')

const Product =require('./Product')

const options = { discriminatorKey: 'categorie' };
const Clothes =Product.discriminator('Clothes',new mongoose.Schema({size:String},options))

module.exports= Clothes;
