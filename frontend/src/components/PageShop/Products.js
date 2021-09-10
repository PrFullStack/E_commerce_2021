import React,{Component, useState} from 'react';
import formatCurrency from '../../util';
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import '../css/styleProduct.css';
import '../css/shop.css';

  
export default class Products extends Component{
    render(){
       /*  const [items,setItems] = useState([]); */
         const handlePageClick=(data)=>{
            console.log(data.selected);
        } 
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]
          
        /* const Products = () => (
            <Select options={options} />
          ) */
        return(
            
            
            <div>
            
            
                <div class="section-header">
                <h1 align="center"> Product Shop</h1>
                </div>
                <Select options={options}/>
                <ul className="products">
                    
                    {this.props.products.map((product)=>(
                        <li key={product._id}>
            
                <div class="product-item">
                    <div class="product-title">
                        <a href={"#"+product._id}>{product._id}</a>
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
                        <img src={product.image} alt="Product Image"/>
                        </a>
                        <div class="product-action">
                            <a href="#"><i class="fa fa-cart-plus"></i></a>
                            <a href="#"><i class="fa fa-heart"></i></a>
                            <a href="#"><i class="fa fa-search"></i></a>
                        </div>
                        <div class="product-price">
                        <h3> <div>{formatCurrency(product.price)} </div></h3>
                        <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
                    </div>
                    </div>
                  
                </div>
                
              
            
                            </li>
                            ))}
                </ul>
<div id="react-paginate">
               <ReactPaginate 
              
               previousLabel={'previous'}
               nextLabel={'next'}
               
               pageCount={15}
               marginPagesDisplayed={3}
               pageRangeDisplayed={3}
               onPageChange={handlePageClick}
               containerClassName={'pagination'}
               activeClassName={'active'}
               pageClassName={'page-item'}
               pageLinkClassName={'page-link'}
               previousClassName={'page-item'}
               previousClassName={'page-link'}
               nextClassName={'page-item'}
               nextLinkClassName={'page-link '}
               breakClassName={'page-link'}
               >
                   
                   
               </ReactPaginate>
               </div>
</div>

              
             
   
        
            
        )}
        
        
}
 {/* <div className="left-colmun col-md-8">
               <h1 className="h1">SHOP</h1>
             
               <Select options={options} />

                

            </div>
             */}