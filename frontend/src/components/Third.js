import React  from 'react'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // npm install bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import { Carousel } from 'react-bootstrap'; //npm i --save react-bootstrap-carousel
import './css/styleHeader.css' // import file Third.css


export class Third extends Component{
    render(){
        return(
          <div>
          <footer>
          <div class="our-partner">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="customNavigation">
                      </div>
                      <Carousel>
                      <Carousel.Item>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#"><img src="images\banner.jpg" alt="" width="115px" height="100px"/></a>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\dresser.jpg" alt="" width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\kitchen.jpg" alt="" width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\miroir.jpg" alt="" width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\pic1.png" alt=""width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\pic2.png" alt="" width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\kitchen.jpg" alt="" width="115px" height="100px"/></a>
                             
                              </Carousel.Item>
                              <Carousel.Item>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#"><img src="images\banner.jpg" alt="" width="115px" height="100px"/></a>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\dresser.jpg" alt="" width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\kitchen.jpg" alt="" width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\miroir.jpg" alt="" width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\pic1.png" alt=""width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\pic2.png" alt="" width="115px" height="100px"/></a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="images\kitchen.jpg" alt="" width="115px" height="100px"/></a>
                             
                             
                             
                              </Carousel.Item>
                      </Carousel>
                  </div> 
              </div>
          </div>
      </div> 
      <div class="main-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h3 class="widget-title">About Us</h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, debitis recusandae.
                            <ul class="follow-us">
                                   <li><a href="#"><i class="fab fa-facebook"></i>Facebook</a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i>Twitter</a></li>
                            </ul> 
                        </div> 
                    </div>
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h3 class="widget-title">Why Choose Us?</h3>
                            Kool Store is free responsive eCommerce template provided by templatemo website. You can use this layout for any website.
                            <br/><br/>Tempore cum mollitia eveniet laboriosam corporis voluptas earum voluptate. Lorem ipsum dolor sit amet.
                            <br/><br/>Credit goes to <a rel="nofollow" href="http://unsplash.com">Unsplash</a> for all images.
                        </div> 
                    </div> 
                    <div class="col-md-2">
                        <div class="footer-widget">
                            <h3 class="widget-title">Useful Links</h3>
                            <ul>
                                <li><a href="#">Our Shop</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div> 
                    </div> 
                    <div class="col-md-4">
                        <div class="footer-widget">
                            <h3 class="widget-title">Our Newsletter</h3>
                            <div class="newsletter">
                                <form action="#" method="get">
                                    <p>Sign up for our regular updates to know when new products are released.</p>
                                    <input type="text" title="Email" name="email" placeholder="Your Email Here"/>
                                    <input type="submit" class="s-button" value="Submit" name="Submit"/>
                                </form>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
        <div class="bottom-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <span>Copyright &copy; 2084 <a href="#">Company Name</a> | Design: templatemo</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, expedita soluta mollitia accusamus ut architecto maiores cum fugiat. Pariatur ipsum officiis fuga deleniti alias quia nostrum veritatis enim doloremque eligendi?</p>
                    </div> 
                </div> 
            </div> 
        </div> 

      </footer>
    </div>
        )
    }
}