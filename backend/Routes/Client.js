const express = require('express');
const mongoose =require('mongoose')
const router =express.Router()
const Client=require('../Models/Client')
//////////////////////////////////////////CRUD//////////////////////////////////////////////

router.get('/:id', async (req,res)=>{

    var id = req.params.id;
    Client.findById(id, function (err, client) {
        if (err){
            res.status(404).json(err)
        }
        else{
            res.status(200).json(client)
        }
    });
})

router.post('/nouveau', async (req,res)=>{
  console.log(req.body)
try{
    client=Client(req.body);
  await client.save()
  res.status(201).json(client)
}

catch(err)
{
    res.status(400).json(err)
}

})














module.exports=router;