const express = require('express');
const mongoose =require('mongoose')
const router =express.Router()
const Client=require('../Models/Client')
//////////////////////////////////////////CRUD//////////////////////////////////////////////

//get client by id 
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





router.put( '/:id' ,async(req,res)=>{
 
  await Product.findOneAndUpdate({'_id':req.params[0]},req.body,function (err, client) {

    if(err) {res.status(404).json(err)}
    res.status(200).json({ Product})
    })
});

router.get('/all', async (req,res)=>{



  await Client.find( { }, function (err, clients) {

    if(err) {res.status(404).json(err)}
    res.status(200).json({ clients})
    })
    
})

router.post('/login',async (req,res)=>
{
  await Client.findOne( {  $and: [{'email':req.body.email},{'password':req.body.password}] }, function (err, Client) {

    if(err) {res.status(404).json(err)}
    res.status(200).json({Client})
    })
    

});



router.delete('/:id', async (req,res)=>{

  try {

    const removedClient = await Client.deleteOne({'_id':req.params[0]})
    res.status(200).json(removedClient)
  }
  catch(err)
  {
    res.status(404).json({messag:err})
  }
})

router.post('/new', async (req,res)=>{
  
try{
    let client=Client(req.body);
  await client.save()
  res.status(201).json(client)
}

catch(err)
{
    res.status(400).json(err)
}

})



// add product to cart 
router.post('/cart',async (req,res)=>{

    await Client.findByIdAndUpdate(
      req.query.id1,
        { $push: { cart: req.query.id2} },
        { new: true, useFindAndModify: false },
        function (err, client) {

            if(err) {res.status(404).json(err)}
            res.status(200).json({ client})
            }
        
        
        
      );

    }
);
// add product to favorite
router.post('/favorite',async (req,res)=>{

  await Client.findByIdAndUpdate(
    req.query.id1,
      { $push: { favorite: req.query.id2} },
      { new: true, useFindAndModify: false },
      function (err, client) {

          if(err) {res.status(404).json(err)}
          res.status(200).json({ client})
          }
      
      
      
    );

  }
);

const getCart = function(id) {
    return Client.findById(id).populate("cart");
  };
  const getFavorite = function(id) {
    return Client.findById(id).populate("favorite");
  };
router.get('/listCart/:id',async (req,res)=>
{
  
    let results= await getCart(req.params.id);
    res.status(200).json({ results});
  
});


router.get('/listFavorite',async (req,res)=>
{
  
    let panier= await getFavorite(req.query.id);
    res.status(200).json({ Favorite});
  
}


);



module.exports=router;