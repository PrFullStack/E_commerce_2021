import React,{Component} from 'react';
import '../css/Panier.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { getCart } from '../apiClient';
import Product from './product'
export default class Home extends Component{
    constructor(props) {
     super(props)
      
        this.state = {
          products:[],
                
        };
      }
getTotal()
{
  let somme =0;
  for (var i = 0; i<this.state.products.length; i++) {
  let price=this.state.products[i].price-(this.state.products[i].price*this.state.products[i].reduction);
  somme+=price;
  }
  return somme;
}
      displayProduCts()
      {
    
        var products = [];
    
    for (var i = 0; i<this.state.products.length; i++) {
      products.push( <Product product={this.state.products[i]}></Product>);
    }
    return products;
      
    }


     componentDidMount()
    {
        getCart("61545d82bb4e403f280c7c1a").then((e)=>{ 
          
          this.setState({products:e}) ; console.log(e)
        })
}
render() {
  
    let products=this.state.products;


if(products.length>0)
{
   
    return(
        <div>
<div class="box">
        <h1> <b> Cart <span>({products.length}</span> articles) </b></h1> 
        <div class="Pannier">
        <div class="row">
        <div class="col-5"> <b> Articles </b> </div>
  <div class="col"> <b> Quantity </b> </div>
  <div class="col"> <b> Price </b> </div>
  <div class="col"> <b> SubTotal </b> </div>
</div>
</div>

{this.displayProduCts()}
</div>



   
<div class="Price">
   <p> Total TTC: <h3>$	{this.getTotal()}  </h3> </p> 
   <h4> Shipping costs not included
 <br/>
 for the moment
 </h4> <br/>
   <h4> 
International transit charges <br/>
not included at the moment </h4>
</div>

<div class="Buy">
<button  class="btn1 btn-outline-light">Continue Shopping</button>
<button  class="btn2 btn-outline-light">Finalize you order</button>
</div>
</div>

    )
}

else

    return(
        <p></p>
    )


}}