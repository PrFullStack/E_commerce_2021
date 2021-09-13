const mongoose =require('mongoose')

const Client=new mongoose.Schema({
nom:{ type: String, required: true },
prenom: {type: String, required: true},
email: {type: String, required: true},
tel: {type: String, required: true},
adresse:{ type: String},
pays:{ type: String },
ville:{ type: String },
password:{type:String}

})

module.exports=mongoose.model('Clients',Client)