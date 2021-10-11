import React,{Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import CardProduct from './card-product' // import file card-product.js

import Carousel from "react-elastic-carousel"; //  npm install --save react-elastic-carousel
import {BrowserRouter as Router,useHistory, Link } from "react-router-dom";

 
                


export default class Products extends Component{

    render(){
     
        const breakPoints = [
            { width: 1, itemsToShow: 2 },
            { width: 550, itemsToShow: 3 },
            { width: 768, itemsToShow: 4 },
          
          ];
        
        return(
  <>
             <div  ref={this.myRef} class="container-fluid">
                <div class="section-header">
                    <h1 align="center">New Arrivals</h1>
         
                
                <div class="row align-items-center">
                    
                 <div class="col-lg-4 col-md-4 feature-col">
                        <div class="feature-content">
                        <div  onClick= {()=>{this.getProducts("Clothes") }} class="iconFashion">  <h4 >Fashion</h4></div>
                       
                          
                           
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 feature-col">
                        <div class="feature-content">
                        <div  onClick= {()=>{this.getProducts("Furniture") }} class="iconFurniture">  <h4 >Furniture</h4></div>
                       
                          
                           
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 feature-col">
                        <div class="feature-content">
                        <div  onClick= {()=>{this.getProducts("Computer") }} class="iconComputer">  <h4 >Electronics</h4></div>
                       
                          
                           
                      
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
            </div>
            </div>



            <div  ref={this.myRef} class="container-fluid">
                <div class="section-header">
                    <h1 align="center">Best sellers </h1>
         
                
                <div class="row align-items-center">
                    
                 <div class="col-lg-4 col-md-4 feature-col">
                        <div class="feature-content">
                        <div  onClick= {()=>{this.getProducts("Clothes") }} class="iconFashion">  <h4 >Fashion</h4></div>
                       
                          
                           
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 feature-col">
                        <div class="feature-content">
                        <div  onClick= {()=>{this.getProducts("Furniture") }} class="iconFurniture">  <h4 >Furniture</h4></div>
                       
                          
                           
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 feature-col">
                        <div class="feature-content">
                        <div  onClick= {()=>{this.getProducts("Computer") }} class="iconComputer">  <h4 >Electronics</h4></div>
                       
                          
                           
                      
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
            </div>
            </div>
                    </>
            
        )}
                    }