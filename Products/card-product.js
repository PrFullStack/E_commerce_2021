import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'// npm install bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css'// npm install @fortawesome/fontawesome-free
import './styleProduct.css'; // import file styleProduct.css



export default class CardProduct extends Component{

   render()
   {


    return(

        <div class="col-lg-3">
        <div class="product-item">
            <div class="product-title">
                <a href="#">Product Name</a>
                <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
            <div class="product-image">
                <a href="product-detail.html">
                    <img src="images\dress1.jpg" alt="Product Image"/>
                </a>
                <div class="product-action">
                    <a href="#"><i class="fa fa-cart-plus"></i></a>
                    <a href="#"><i class="fa fa-heart"></i></a>
                    <a href="#"><i class="fa fa-search"></i></a>
                </div>
            </div>
            <div class="product-price">
                <h3><span>$</span>99</h3>
                <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
            </div>
        </div>
    </div>


    )
   }

}

    