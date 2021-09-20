import React, {Component} from 'react';
import {getProduct} from '../apiProduct'
import '../css/des.scss'
import ReactDOM from 'react-dom'; 
import Products from './Suggest';
export default class Description extends Component{
    state = {
        products: [
  
        ],
        index: 0
      };
    
    myRef = React.createRef();
    
    
     
      remplace(id)
      {
   

         let element1 = document.getElementById(id)
          let element2 = document.getElementById('BigPhoto')
          ReactDOM.findDOMNode(element2).setAttribute('src',ReactDOM.findDOMNode(element1).getAttribute('src')) 
          
      }

      componentDidMount()
      {
          getProduct("ref4").then((e)=>{ var joined = this.state.products.concat(e);//id product
            this.setState({products:joined})})
          
          
          }
     
 displayListImages()
          {
            let imagesUrl=this.state.products[0];
        let images=[]
            for(var i=0;i<imagesUrl.path.length;i++)
            {   
              var id="img"+i;
images.push(<li><img id={id} onClick={ (e)=>this.remplace(e.target.id)} src={imagesUrl.path[i]}></img></li> )
       
                    
            }
            console.log("fin")
            return images;
           
          }
      render(){
   
        const {products, index} = this.state;
     if(products.length==1)
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
   <img id="BigPhoto" src={products[0].path[0]}></img>
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
                <h1>{products[0].designation}</h1>
                <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
              </div>
              <div class="price">
                <span> ${products[0].price}</span>
          

              </div>
            
              <div class="reduction">
              <span>   <strike>$ {products[0].price-(products[0].price*products[0].reduction)}</strike>   <span class="rateReduction">-{products[0].reduction*100}%</span></span> 
          

              </div>



              <div class="description">
               <p>{products[0].description}</p>
              </div>
              <button class="buy--btn">ADD TO CART</button>
            </div>
          </section>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

         
          </div>
        );}
        else{
          return(<p>444</p>)
        }
      };
     
}