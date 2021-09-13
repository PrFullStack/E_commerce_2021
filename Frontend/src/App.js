import React from "react";
import Header from './components/Header'
import Home from "./components/PageHome/Home";
import {Third} from './components/Third'
import data from "./data.json";



class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      cartItems:[],
      size:"",
      sort:"",
      
    };
    
  }
  render(){
return(
<div>
  <Header/>
  <Third/>
</div>
);
  
  }
}

export default App;