import React,{Component, useState} from 'react';
import formatCurrency from '../../util';
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import Select from 'react-select';
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
                    <p> {product.title} </p>
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
                        <img src={product.path[0]} alt="Product Image"/>
                        </a>
                        <div class="product-action">
                            <a href="#"><i class="fa fa-cart-plus"></i></a>
                            <a href="#"><i class="fa fa-heart"></i></a>
                            <a href="#"><i class="fa fa-search"></i></a>
                        </div>
                        <div class="product-price">
                        <h3> <div>{formatCurrency(product.price)} </div></h3>
                        <a class="btnShop" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
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