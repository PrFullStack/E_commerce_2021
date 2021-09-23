import React,{Component} from 'react';
import '../css/Panier.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default class Home extends Component{

render() {
    return(
        <div>
<div class="box">
        <h1> <b> Panier <span>(0</span> articles) </b></h1> 
        <div class="Pannier">
        <div class="row">
        <div class="col-5"> <b> Articles </b> </div>
  <div class="col"> <b> Quantity </b> </div>
  <div class="col"> <b> Price </b> </div>
  <div class="col"> <b> SubTotal </b> </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5">
          
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>
 
<div class="Item-panier">
<div class="row">
        <div class="col-5"> 
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5"> 
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>

<div class="Item-panier">
<div class="row">
        <div class="col-5"> 
        <img src="images\dress2.jpg" width="70px" height="70px"/> 
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>


<div class="Item-panier">
<div class="row">
        <div class="col-5"> 
        <img src="images\dress2.jpg" width="70px" height="70px"/>  
        <a href=""> <b>Boys' Sport Shoes - gray</b></a> <br/>
        <a href="">  <i class="fas fa-heart"></i> Favoris  </a>
        <a href="">  <i class="fas fa-trash-alt"></i> Delete  </a>
         </div>
  <div class="col"> 
  <div class="selectdiv">
      <select>
          <option selected> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
      </select>
</div>
   </div>
  <div class="col">
       <b> <big> 78.98 dhs </big> </b> <br/>
        <strike> 199.00 dhs </strike> <br/>
        <h6> Economie : 120.02  dhs</h6> 
       </div>
  <div class="col"> 
   <h2> 78.98  dhs </h2> 
  </div>
</div>
</div>


</div>

<div class="Price">
   <p> Total TTC: <h3>	1,956.12  dhs </h3> </p> 
   <h4> Frais de livraison non inclus <br/>
        pour le moment
 </h4> <br/>
   <h4> Frais de transit internationaux <br/>
       non inclus pour le moment </h4>
</div>

<div class="Buy">
<button  class="btn1 btn-outline-light">Continue Shopping</button>
<button  class="btn2 btn-outline-light">Finalize you order</button>
</div>

</div>

    )
}

}