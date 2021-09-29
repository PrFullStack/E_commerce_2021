import React,{Component} from 'react';
import '../css/favoris.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default class Favoris extends Component{

render() {
    return(
        <div class="box">
<div >
        <h1> <b> Favorites <span>(0</span> articles) </b></h1> 
</div>
<div class="Item-favoris">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <b> <big> 78.98 dhs </big> </b> 
        <strike> 199.00 dhs </strike> 
        <h6> -60% </h6> 
         </div>
 
  <div class="col"> 
  <button  class="btn btn-outline-light">  <i className="fa fa-shopping-cart"></i> Buy Now  </button> 
  <button  class="btn btn-outline-light">  <i class="fas fa-trash-alt"></i> Delete </button>
  </div>
</div>
</div>
<div class="Item-favoris">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <b> <big> 78.98 dhs </big> </b> 
        <strike> 199.00 dhs </strike> 
        <h6> -60%</h6> 
         </div>
 
  <div class="col"> 
  <button  class="btn btn-outline-light"> <i className="fa fa-shopping-cart"></i>  Buy Now   </button> 
  <button  class="btn btn-outline-light">  <i class="fas fa-trash-alt"></i> Delete </button>
  </div>
</div>
</div>
</div>

    )
}

}