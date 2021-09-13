
import { Component } from 'react'
import './css/des.scss'
import ReactDOM from 'react-dom';  
import {getProduct} from './apiProduct'
export default class Des extends Component
{

	state = {
        products: [
  
        ],
        index: 0
      };
	  componentDidMount()
      {
          getProduct("ref2").then((e)=>{ var joined = this.state.products.concat(e);
            this.setState({products:joined})})
         
          
          }
	remplace(id)
	{

		
			let element1 = document.getElementById(id)
			let element2 = document.getElementById('BigPhoto')
			ReactDOM.findDOMNode(element2).setAttribute('src',ReactDOM.findDOMNode(element1).getAttribute('src')) 
		  
	}

render()
{
	console.log(this.state.products)
return(
<div>
<section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<div class="controls">
					<i class="material-icons">share</i>
					<i class="material-icons">favorite_border</i>
				</div>
	
			</div>
			<div class="photo-album">
				<ul>
					<li><img id="img1" onClick={(e)=>this.remplace("img1")} src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
					<li><img   id="img2"  onClick={(e)=>this.remplace("img2")} src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"/></li>
					<li><img  id="img3" onClick={(e)=>this.remplace("img3")} src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"/></li>
					<li><img  id="img4"onClick={(e)=>this.remplace("img4")} src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>Delicious Apples</h1>
			<span>COD: 45999</span>
		</div>
		<div class="price">
			R$ <span>7.93</span>
		</div>

		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>Apples are nutricious</li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</div>
		<button class="buy--btn">ADD TO CART</button>
	</div>
</section>

<footer>
	<p>Design from <a href="https://dribbble.com/shots/5216438-Daily-UI-012">dribbble shot</a> of <a href="https://dribbble.com/rodrigorramos">Rodrigo Ramos</a></p>
</footer>
</div>
)
}}