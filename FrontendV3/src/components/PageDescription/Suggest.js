import React,{Component} from 'react';
import '../css/styleProduct.css'; // import file styleProduct.css
import CardProduct from '../PageHome/card-product';// import file card-product.js
import Carousel from 'react-elastic-carousel'; //  npm install --save react-elastic-carousel
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";
import { getProductsApi } from '../apiProduct';
export default class Products extends Component{
   

  constructor(props) {
    super(props);
 
    this.state = {
      products:[],
   
      
    };
  }
  componentDidMount()
  {
    this.state.products=[]
 
    getProductsApi("Furniture").then((e)=>{ var joined = this.state.products.concat(e);
      this.setState({products:joined})})
  }
 
  displaySuggested()
  {

    var products = [];

for (var i = 0; i<this.state.products.length; i++) {
  products.push( <CardProduct product={this.state.products[i]}></CardProduct>);
}
return products;

  }
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
                
            <div class="container-fluid">

            <div className="App">
              <Carousel breakPoints={breakPoints}>
              {this.displaySuggested()}
              </Carousel>
            </div>
            </div>
            </div>
            </div>
            </Router>

        )}
                    }
