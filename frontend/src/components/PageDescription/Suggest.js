import React,{Component} from 'react';
import '../css/styleProduct.css'; // import file styleProduct.css
import CardProduct from '../PageHome/card-product';// import file card-product.js
import Carousel from 'react-elastic-carousel'; //  npm install --save react-elastic-carousel
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";

export default class Products extends Component{
   
    render(){
        const breakPoints = [
            { width: 1, itemsToShow: 2 },
            { width: 550, itemsToShow: 3 },
            { width: 768, itemsToShow: 4 },
          
          ];
        return(
          <Router>
          <div>  
             <div class="section-header">
                    <h1 align="center">Suggestions</h1>
                </div>
            <div class="container-fluid">

            <div className="App">
              <Carousel breakPoints={breakPoints}>
              <Link to="/detail"><CardProduct></CardProduct></Link>
            <Link to="/detail"><CardProduct></CardProduct></Link>
            <Link to="/detail"><CardProduct></CardProduct></Link>
            <Link to="/detail"><CardProduct></CardProduct></Link>
            <Link to="/detail"><CardProduct></CardProduct></Link>
            <Link to="/detail"><CardProduct></CardProduct></Link>
            <Link to="/detail"><CardProduct></CardProduct></Link>
            <Link to="/detail"><CardProduct></CardProduct></Link>
            <Link to="/detail"><CardProduct></CardProduct></Link>
              </Carousel>
            </div>
            </div>
            </div>
            </Router>

        )}
                    }
