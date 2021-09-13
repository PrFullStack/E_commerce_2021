import React,{Component} from 'react';
import Products from "./Products";
import Filter from "./Filter";
import data from "../../data.json";


export default class Home extends Component{
    constructor(){
        super();
        this.state={
          products:data.products,
          
          size:"",
          sort:"",
        };
      }
    
    render() {
     
        return(
            <div>
                <div><Filter/></div>
            <div><Products
              products={this.state.products}>
              </Products></div>
            </div>
        )
    }

}