import React  from 'react'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class First extends Component{
    render(){
        const mystyle = {
            color : "blue",
            width: "1337px",
            height : "60px"
        }
        const usestyle1 = {
            position: 'absolute', 
            left: '15%', 
            top: '25%'
          
        }
        const usestyle2 = {
            position: 'absolute', 
            left: '25%', 
            top: '25%'
          
        }
        const usestyle3 = {
            position: 'absolute', 
            left: '35%', 
            top: '25%'
          
        }
        const usestyle4 = {
            position: 'absolute', 
            left: '45%', 
            top: '25%'
          
        }
        const usestyle5 = {
            position: 'absolute', 
            left: '65%', 
            top: '25%'
          
        }
        const usestyle6 = {
            position: 'absolute', 
            left: '80%', 
            top: '25%'
          
        }
        const usestyle7 = {
            position: 'absolute', 
            left: '85%', 
            top: '25%'
          
        }
        const usestyle8 = {
            position: 'absolute', 
            left: '90%', 
            top: '25%'
          
        }
        const usestyle9 = {
            position: 'absolute', 
            left: '95%', 
            top: '25%'
          
        }

        return(
            <div class="container-fluid">
<nav class="navbar navbar-expand-lg navbar-light bg-light" style={mystyle}>
    <form>
      <img src="logo.png" width="100px" height="60px"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={usestyle1}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={usestyle2}>Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={usestyle3}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={usestyle4}>Contact</a>
        </li>
       </ul>
      
      <input type="text" class="search-query" placeholder="Search..." style={usestyle5}/>
        <a href="#" style={usestyle6}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="pink" class="bi bi-search" viewBox="0 0 16 16"> 
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
< span class = "glyphicon glyphicon-nom"/></a>


<a href="#" style ={usestyle7}>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="pink" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
     </a>
    
     <a href="#" style ={usestyle8}>
     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="pink" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
     </a>
     <a href="#" style ={usestyle9}>
     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="pink" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
     </a>
      

    </div>
  </form>
</nav>
</div>
        )
    }
}