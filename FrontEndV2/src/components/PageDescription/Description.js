import React, {Component} from 'react';

import '../css/des.scss'
import ReactDOM from 'react-dom'; 

export default class Description extends Component{
  
  
    
    
     
      remplace(id)
      {
   

         let element1 = document.getElementById(id)
          let element2 = document.getElementById('BigPhoto')
          ReactDOM.findDOMNode(element2).setAttribute('src',ReactDOM.findDOMNode(element1).getAttribute('src')) 
          
      }

  
     
 displayListImages()
          {
            let imagesUrl=this.props.product;
        let images=[]
            for(var i=0;i<imagesUrl.path.length;i++)
            {   
              var id="img"+i;
images.push(<li><img id={id} onClick={ (e)=>this.remplace(e.target.id)} src={imagesUrl.path[i]}></img></li> )
       
                    
            }
           
            return images;
           
          }
      render(){
        let product=this.props.product;
        if(product)
        {
           console.log(product.category)}
  
     if(product.price>0)
    {
      {this.displayListImages()}
        return(
         
          <div>
          <section class="product">
            <div class="product__photo">
              <div class="photo-container">
                <div class="photo-main">
                  <div class="controls">
                  <i class="fa fa-share-alt"></i>
                    <i class="fa fa-heart"></i>
                  </div>
   <img id="BigPhoto" src={product.path[0]}></img>
                </div>
                <div class="photo-album">
                  <ul>
                    {this.displayListImages()}
              
                  </ul>
                </div>
              </div>
            </div>
            <div class="product__info">
              <div class="title">
                <h1>{product.designation}</h1>
                <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
              </div>
              <div class="price">
                <span> $ {product.price-(product.price*product.reduction)}</span>
          

              </div>
            
              <div class="reduction">
              <span>   <strike>${product.price}</strike>   <span class="rateReduction">-{product.reduction*100}%</span></span> 
          

              </div>



              <div class="description">
               <p>{product.description}</p>
              </div>
              <button class="buy--btn">ADD TO CART</button>
            </div>
          </section>
          
         
          </div>
        );}
        else{
          return(<p>444</p>)
        }
      };
}