const mongoose =require('mongoose')

const Client=new mongoose.Schema({
firstName:{ type: String, required: true },
lastName: {type: String, required: true},
email: {type: String, required: true},
tel: {type: String, required: true},
adresse:{ type: String},
country:{ type: String },
city:{ type: String },
password: {type: String, required: true},
cart:[ {type: mongoose.Schema.Types.ObjectId,
    ref: "Product"}],
  favorite:  [ {type: mongoose.Schema.Types.ObjectId,
        ref: "Product"}],
})

module.exports=mongoose.model('Clients',Client)