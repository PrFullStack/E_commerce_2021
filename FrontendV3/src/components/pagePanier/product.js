

import React,{Component} from 'react';


export default class Product extends Component{
  

    
  render()

  
  {
    let product  =this.props.product;

  let price=product.price-(product.price*product.reduction);
  let saving = (product.price-price);
      return(<div class="Item-panier">
      <div class="row">
              <div class="col-5">
                
              <img src={product.path[0]} width="70px" height="70px"/> 
              
              <a href=""> <b>{product.title}</b></a> <br/>
              <a href="">  <i class="fas fa-heart"></i> Favorites  </a>
              <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
               </div>
        <div class="col"> 
        <div class="selectdiv">
            <select>
                <option selected> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
            </select>
      </div>
         </div>
        <div class="col">
             <b> <big> {price} </big> </b> <br/>
              <strike> {product.price}  </strike> <br/>
              <h6> Saving : {saving}</h6> 
             </div>
        <div class="col"> 
         <h2> {price} </h2> 
        </div>
      </div>
  
      
   
</div>
      )
  }
}