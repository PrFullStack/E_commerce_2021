import React  from 'react'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // npm install bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free

export default class About extends Component{

    render(){
        return(
            <div>
            <div id="pre-header">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <span>Suspendisse laoreet magna vel diam lobortis imperdiet</span>
                </div>
              </div>
            </div>
          </div>
<div class="about-page">
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="section-heading">
        <div class="line-dec"></div>
        <h1>About Us</h1>
      </div>
    </div>
    <div class="col-md-6">
      <div class="left-image">
        <img src="images/pic1.png" alt="" width="500px" height="200px"/>
      </div>
    </div>
    <div class="col-md-6">
      <div class="right-content">
        <h4>Phasellus vel interdum elit</h4>
        <p><a href="https://www.pexels.com/photo/group-of-people-raising-right-hand-1059120/">Photo Credit</a> goes to Pexels website. Aliquam erat volutpat. Pellentesque fringilla, ligula consectetur cursus scelerisque, leo elit pellentesque sapien, et pharetra arcu elit vitae sem. Suspendisse erat dui, condimentum in mi ac, varius tempor sapien. Donec in justo sit amet ex aliquet maximus ac quis erat.</p> 
        <br/>
        <p>Donec fermentum tincidunt tellus quis fermentum. Proin eget imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor dui sed euismod. Duis est libero, rhoncus fermentum turpis id, tempus fringilla ipsum. Nullam venenatis tincidunt neque vel hendrerit. Suspendisse porta pretium porttitor.</p>
        <br/>
        <p>Sed purus quam, ultricies eu leo in, sollicitudin varius quam. Proin dictum urna ac diam fermentum tempus. Pellentesque urna urna, ullamcorper a tincidunt dignissim, venenatis in nisi. Vivamus in volutpat tellus. Etiam fermentum luctus posuere.</p>
        <br/>
        <p><a rel="nofollow" href="https://www.tooplate.com/view/2114-pixie">Pixie HTML Template</a> can be converted into your desired CMS theme. You can use this Bootstrap v4.1.3 layout for any online shop. Please tell your friends about <a rel="nofollow" href="https://www.facebook.com/tooplate/">Tooplate</a>. Thank you.</p>
        <div class="share">
          <h6>Find us on: 
              <span><a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a><a href="#">
                  <i class="fa fa-twitter"></i></a></span></h6>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="subscribe-form">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Subscribe on PIXIE now!</h1>
            </div>
          </div>
          <div class="col-md-8 offset-md-2">
            <div class="main-content">
              <p>Godard four dollar toast prism, authentic heirloom raw denim messenger bag gochujang put a bird on it celiac readymade vice.</p>
              <div class="container">
                <form id="subscribe" action="" method="get">
                  <div class="row">
                    <div class="col-md-7">
                      <fieldset>
                        <input name="email" type="text" class="form-control" id="email" 
                        onfocus="if(this.value == 'Your Email...') { this.value = ''; }" 
                    	onBlur="if(this.value == '') { this.value = 'Your Email...';}"
                    	value="Your Email..." required=""/>
                      </fieldset>
                    </div>
                    <div class="col-md-5">
                      <fieldset>
                        <button type="submit" id="form-submit" class="button">Subscribe Now!</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>

        )
    }

}