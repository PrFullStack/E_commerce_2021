import React,{Component, useState} from 'react';
import formatCurrency from '../../util';
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import Select from 'react-select';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import '../css/shop.css';
import '../css/styleProduct.css';

  
export default class Products extends Component{
    
    render(){

        const { products, loading } = this.props;

        if (loading) {
            return <h2>Loading...</h2>
        }

       /*  const [items,setItems] = useState([]); */
         const handlePageClick=(data)=>{
            console.log(data.selected);
        } 
        const options = [
            { value: 'Computer', label: 'Computer' },
            { value: 'Furniture', label: 'Furniture' },
            { value: 'Clothes', label: 'Clothes' }
          ]
          
        /* const Products = () => (
            <Select options={options} />
          ) */
        return(
            
            
            <div>
            
            
                
          
               
                <Select options={options}/>
                <ul className="products">
                    
                    {this.props.products.map((product)=>(
                        <li key={product._id}>
            
                <div class="product-item">
                    <div class="product-title">
                        {/* <a href={"#"+product._id}>{product._id}</a> */}
                        <p>{product.title}</p>
                        <div class="ratting">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                    <div class="product-image">
            <img src={product.path[0]} alt="Product Image"/>
                <div class="product-action">
                <Link to="/panier"><i class="fa fa-cart-plus"></i></Link>
                <Link to="/favoris"><i class="fa fa-heart"></i></Link>
                <Link to="/detail"><i class="fa fa-search"></i></Link>
                </div>
                <div class="product-price">
                <Link to="#" class="btn"><i class="fa fa-shopping-cart"></i>Buy Now</Link>
                <h3><span>$</span>{product.price}</h3>
       
                     </div>
                    </div>
                  
                </div>
                
              
            
                            </li>
                            ))}
                </ul>

</div>

              
             
   
        
            
        )}
        
        
}
 {/* <div className="left-colmun col-md-8">
               <h1 className="h1">SHOP</h1>
             
               <Select options={options} />
                
            </div>
             */}