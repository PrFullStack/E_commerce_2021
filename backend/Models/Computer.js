const mongoose =require('mongoose')

const Product =require('./Product')

const options = { discriminatorKey: 'categorie' };
const Computer =Product.discriminator('Computer',new mongoose.Schema({capacity:Number},options))

module.exports= Computer;