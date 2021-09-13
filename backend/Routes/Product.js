const express = require('express');
const mongoose =require('mongoose')
const router =express.Router()
const Product = require('../Models/Product')
const Furniture =require('../Models/Furniture')
const Clothes =require('../Models/Clothes')
const Computer =require('../Models/Computer')
const multer = require("multer");
const path=require("path")

var storage = multer.diskStorage({
  destination:  (req,file,cb)=>{


    return cb(null,`./assets/${req.body.categorie}`)
  },
  filename: (req,file,cb)=>{
    var name  = file.originalname.split(".");
    name = name[0];
    return cb(null,`${req.body.reference}_${name}${path.extname(file.originalname)}`)
  }
  })

var  upload = multer({  storage:storage});

///////////////////////////////////////////////////CRUD//////////////////////////////////////////////////////





/// delete product 
router.delete('deleteOne/:ref', async (req,res)=>{

  try {

    const removedProduct = await Product.deleteOne({'reference':req.params[0]})
    res.status(200).json(removedProduct)
  }
  catch(err)
  {
    res.status(404).json({messag:err})
  }
})




















// create Product
router.post('/new',upload.array('photo'),async (req, res) => {


  var path =[]

for(var i=0;i<req.files.length;i++)
{

  path.push(`http://localhost:9393/${req.body.categorie}/${req.files[i].filename}`)
}


 var ProductModel;
if(req.body.categorie=="Clothes")
{  
ProductModel=new Clothes(req.body);}
else if(req.body.categorie=="Computer")
 {ProductModel=new Computer(req.body); }
else
 {ProductModel=new Furniture(req.body);}


 let date= new Date(req.body.creationDate);

 ProductModel.creationDate={

 'day': date.getDate(),
 'month': date.getMonth()+1,
 'year' : date.getFullYear()
 }
 ProductModel.path=path;

 try{
  await ProductModel.save();
res.status(201).json(ProductModel)
}
catch(err)
{
  res.status(400).json({message:err})

}
})













// get products
router.get('/', async (req,res)=>{
  var searched= new Array();
  searched.push({'categorie':req.query.categorie});
  
if(req.query.newest)
{
  
  let currentMonth=new Date(Date.now()).getMonth()+1;

  searched.push({'creationDate.month':currentMonth})// products of this month 

}
if(req.query.price)
{
  searched.push({'price':req.query.price})
}
if(req.query.dimension)
{
  searched.push({'price':req.query.dimension})
}
if(req.query.material)
{
  searched.push({'price':req.query.material})
}
if(req.query.capacite)
{
  searched.push({'price':req.query.capacite})
}




if(req.query.color)
{
  searched.push({'price':req.query.color})
}

if(req.query.size)
{
  searched.push({'price':req.query.size})
}

var ProductModel;

if(req.query.categorie=="Clothes")
 ProductModel=Clothes;
else if((req.query.categorie=="Computer"))
 ProductModel=Computer;
 else
 ProductModel=Furniture;


await ProductModel.find( { $and: searched}, function (err, Products) {

if(err) {res.status(404).json(err)}
res.status(200).json({ Products})
})

})




/// findOne
router.get('/findOne/:ref', async (req,res)=>{


  await Product.findOne( {reference:req.params.ref}, function (err, Product) {

    if(err) {res.status(404).json(err)}
    res.status(200).json({ Product})
    })
    
    

})



  module.exports=router;