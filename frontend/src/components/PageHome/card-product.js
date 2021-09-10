import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'// npm install bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css'// npm install @fortawesome/fontawesome-free
import '../css/styleProduct.css'; // import file styleProduct.css
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";//npm install --save react-router-dom
import Detail from '../PageDescription/Detail';




function CardProduct() {
      

    return(
      <Router>
         
        <div class="col-lg-3">
        <div class="product-item">
        <div class="product-title">
           
       <p> Product Name </p>
                <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
             
            <div class="product-image">
            <img src="images\dress2.jpg" alt="Product Image"/>
                <div class="product-action">
                <Link to="/panier"><i class="fa fa-cart-plus"></i></Link>
                <Link to="/favoris"><i class="fa fa-heart"></i></Link>
                <Link to="/detail"><i class="fa fa-search"></i></Link>
                </div>
                <div class="product-price">
                <Link to="#" class="btn"><i class="fa fa-shopping-cart"></i>Buy Now</Link>
                <h3><span>$</span>99</h3>
       
            </div>
         
            </div>  
    
        </div>
    </div>
  
    </Router>

    )
   
    
}

export default CardProduct;