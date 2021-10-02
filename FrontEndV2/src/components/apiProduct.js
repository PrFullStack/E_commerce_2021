import { getDefaultNormalizer } from "@testing-library/dom";


/*
export function getData(categorie)
{
return getProducts(categorie).then((e)=>{return e})
}
*/
export  async function getProductsApi(categorie)
{
 











var url="http://localhost:9393/products?category="+categorie

return fetch(url)
      .then((response) => {
      
     return    response.json();
    
      
      })
      .then((e) => {
 return e.Products
      })


      

}



export  async function getProduct(ref)
{
 











var url="http://localhost:9393/products/findOne/"+ref

return fetch(url)
      .then((response) => {
      
     return    response.json();
    
      
      })
      .then((e) => {
return e.Product
      })


      

}








export   function getProductsFiltred(filter)
{
 









var url="http://localhost:9393/products?"+filter


return fetch(url)
      .then((response) => {
      
     return    response.json();
    
      
      })
      .then((e) => {
         return e.Products
      })


      

}
