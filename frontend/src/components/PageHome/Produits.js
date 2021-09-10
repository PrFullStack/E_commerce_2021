import React,{Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import CardProduct from './card-product' // import file card-product.js
import '../css/styleProduct.css'; // import file styleProduct.css
import Carousel from "react-elastic-carousel"; //  npm install --save react-elastic-carousel
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Produits extends Component{
    
    render(){
       
        const breakPoints = [
            { width: 1, itemsToShow: 2 }, 
            { width: 550, itemsToShow: 3 },
            { width: 768, itemsToShow: 4 },
          
          ];
        return(

        
  <>
  <Router>
           <div class="container-fluid">
         
                <div class="section-header">
                    <h1 align="center">New Arrivals</h1>
                </div>

                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 feature-col">
                        <div class="feature-content">
                        <Link to="/fashion">
                        <i class="fas fa-tshirt"></i>
                            <h3>Fashion</h3>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 feature-col">
                        <div class="feature-content">
                        <Link to="/electronics">
                        <i class="fas fa-mobile"></i>
                            <h3>Electronics</h3>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 feature-col">
                        <div class="feature-content">
                        <Link to="/furniture">
                        <i class="fas fa-chair"></i>
                            <h3>Furniture</h3>
                            </Link>
                        </div>
                    </div>

            </div>
  </div>

            <div className="App">
        
            <Carousel breakPoints={breakPoints}>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          
             </Carousel>
            
            </div>
          
           
            <div class="container-fluid">
                <div class="section-header">
                    <h1 align="center">Best Sellers</h1>
                </div>

            <div className="App">
              <Carousel breakPoints={breakPoints}>
         
        <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
          <Link to="/detail"> <CardProduct></CardProduct> </Link>
              </Carousel>
            
            </div>
            </div>
           
            </Router>
                    </>
            
        )}
                    }
                