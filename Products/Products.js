import React,{Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import CardProduct from './card-product' // import file card-product.js
import './styleProduct.css'; // import file styleProduct.css

import Carousel from "react-elastic-carousel"; //  npm install --save react-elastic-carousel
export default class Products extends Component{
   
    render(){
        const breakPoints = [
            { width: 1, itemsToShow: 2 },
            { width: 550, itemsToShow: 3 },
            { width: 768, itemsToShow: 4 },
          
          ];
        return(
  <>
             <div class="container-fluid">
                <div class="section-header">
                    <h1 align="center">Featured Product</h1>
                </div>
                
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 feature-col">
                        <div class="feature-content">
                          <a href="#">
                        <i class="fas fa-tshirt"></i>
                            <h3>Fashion</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 feature-col">
                        <div class="feature-content">
                          <a href="#">
                        <i class="fas fa-mobile"></i>
                            <h3>Electronics</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 feature-col">
                        <div class="feature-content">
                          <a href="#">
                        <i class="fas fa-chair"></i>
                            <h3>Furniture</h3>
                            </a>
                        </div>
                    </div>

            </div>
  </div>

            <div className="App">
              <Carousel breakPoints={breakPoints}>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              </Carousel>
            
            </div>
          
            

        
            
            <div class="container-fluid">
                <div class="section-header">
                    <h1 align="center">Best Sellers</h1>
                </div>
                <div class="row align-items-center product-slider product-slider-4">

            <div className="App">
              <Carousel breakPoints={breakPoints}>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              </Carousel>
            </div>
            </div>
            </div>
          
                    </>
            
        )}
                    }
