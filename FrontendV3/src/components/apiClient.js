export  async function getCart(id)
{
 

var url="http://localhost:9393/clients/listCart/"+id;

return fetch(url)
      .then((response) => {
      
     return    response.json();
    
      
      })
      .then((e) => {
 return e.results.cart
      })


      

}


