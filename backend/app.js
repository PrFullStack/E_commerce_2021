const express = require('express')
const app = express()
const mongoose= require('mongoose')//odm
require('dotenv/config');

const cors = require('cors')

// connect to mongodb 
app.use(cors())
const connect =async ()=>{
await mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true})
console.log('db connected')
};


app.use(express.static(__dirname + '/assets'));
connect();
/// instead of body-parser
app.use(express.json())

//use route products when route is like /products
const ProductRoute=require('./Routes/Product')
app.use('/Products',ProductRoute)

const ClientRoute=require('./Routes/Client')
app.use('/Clients',ClientRoute)




//start listening 
app.listen(9393, () => {
  console.log("started");
})