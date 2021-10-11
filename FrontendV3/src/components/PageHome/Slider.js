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
                       <img class="first_slide" src="images\banner.jpg" alt="First slide" width="100%" height="500px"/>
                       <div class="_container">
                           <div class="carousel-caption relative">
                               <span>All New Products </span>
                               <h1>up to 25% Flat Sale</h1>
                              
                               <a class="buynow" href="#">Buy Now</a>
                               <ul class="social_icon">
                                   <li> <a  className="fabLink" href="#"><i class="fab fa-facebook"></i></a></li>
                                   <li> <a  className="twitLink" href="#"><i class="fab fa-twitter"></i></a></li>
                                   <li> <a  className="instaLink" href="#"><i class="fab fa-instagram"></i></a></li>
                                   
                               </ul>
                               
                           </div>
                       </div>
                   </Carousel.Item>
                   <Carousel.Item>
                       <img class="second-slide" src="images\slide1.jpg" alt="Second slide" width="100%" height="500px"/>
                       <div class="_container">
                           <div class="carousel-caption relative">
                               <span>All New Products </span>
                               <h1>up to 25% Flat Sale</h1>
                               
                               <a class="buynow" href="#">Buy Now</a>
                               <ul class="social_icon">
                               <li> <a className="fabLink" href="#"><i class="fab fa-facebook"></i></a></li>
                                   <li> <a className="twitLink" href="#"><i class="fab fa-twitter"></i></a></li>
                                   <li> <a className="instaLink" href="#"><i class="fab fa-instagram"></i></a></li>
                               </ul>
                           </div>
                       </div>
                   </Carousel.Item>
                 
                   <Carousel.Item>
                       <img class="second-slide" src="images\slide2.jpg" alt="Second slide" width="100%" height="500px"/>
                       <div >
                           <div class="carousel-caption relative">
                               <span>All New Products </span>
                               <h1>up to 25% Flat Sale</h1>
                               
                               <a class="buynow" href="#">Buy Now</a>
                               <ul class="social_icon">
                               <li> <a className="fabLink" href="#"><i class="fab fa-facebook"></i></a></li>
                                   <li> <a className="twitLink" href="#"><i class="fab fa-twitter"></i></a></li>
                                   <li> <a className="instaLink" href="#"><i class="fab fa-instagram"></i></a></li>
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