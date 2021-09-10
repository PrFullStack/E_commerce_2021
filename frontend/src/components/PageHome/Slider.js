import React  from 'react'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';// npm install bootstrap 
import { Carousel } from 'react-bootstrap';//npm i --save react-bootstrap-carousel
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import '../css/slider.css'


export class Slider extends Component{
    render() {
        return(
           
            <section class="slider_section">
            <div id="myCarousel" class="carousel slide banner-main" data-ride="carousel">
            <Carousel>
            <Carousel.Item>
                       <img class="first_slide" src="images\banner.jpg" alt="First slide" width="1349px" height="500px"/>
                       <div class="container">
                           <div class="carousel-caption relative">
                               <span>All New Phones </span>
                               <h1>up to 25% Flat Sale</h1>
                               <p>It is a long established fact that a reader will be distracted by the 
                                   readable content
                                   <br/> of a page when looking at its layout. The point of using Lorem Ipsum is 
                                   that</p>
                               <a class="buynow" href="#">Buy Now</a>
                               <ul class="social_icon">
                                   <li> <a href="#"><i class="fab fa-facebook"></i></a></li>
                                   <li> <a href="#"><i class="fab fa-twitter"></i></a></li>
                                   <li> <a href="#"><i class="fab fa-instagram"></i></a></li>
                                   
                               </ul>
                               
                           </div>
                       </div>
                   </Carousel.Item>
                   <Carousel.Item>
                       <img class="second-slide" src="images\slide1.jpg" alt="Second slide" width="1349px" height="500px"/>
                       <div class="container">
                           <div class="carousel-caption relative">
                               <span>All New Phones </span>
                               <h1>up to 25% Flat Sale</h1>
                               <p>It is a long established fact that a reader will be distracted by the readable 
                                   content
                                   <br/> of a page when looking at its layout. The point of using Lorem Ipsum is 
                                   that</p>
                               <a class="buynow" href="#">Buy Now</a>
                               <ul class="social_icon">
                               <li> <a href="#"><i class="fab fa-facebook"></i></a></li>
                                   <li> <a href="#"><i class="fab fa-twitter"></i></a></li>
                                   <li> <a href="#"><i class="fab fa-instagram"></i></a></li>
                               </ul>
                           </div>
                       </div>
                   </Carousel.Item>
                   <Carousel.Item>
                       <img class="third-slide" src="images\slide2.jpg" alt="Third slide" width="1349px" height="500px"/>
                       <div class="container">
                           <div class="carousel-caption relative">
                               <span>All New Phones </span>
                               <h1>up to 25% Flat Sale</h1>
                               <p>It is a long established fact that a reader will be distracted by the readable 
                                   content
                                   <br/> of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that</p>
                               <a class="buynow" href="#">Buy Now</a>
                               <ul class="social_icon">
                               <li> <a href="#"><i class="fab fa-facebook"></i></a></li>
                                   <li> <a href="#"><i class="fab fa-twitter"></i></a></li>
                                   <li> <a href="#"><i class="fab fa-instagram"></i></a></li>
                               </ul>
                           </div>
                       </div>
                       </Carousel.Item>
                       </Carousel>
              
               </div>
               
       </section>
              
       
    
        )
    
    }
}