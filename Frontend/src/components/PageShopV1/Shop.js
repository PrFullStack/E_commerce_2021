import React,{Component} from 'react';
import Products from "./Products";
import Filter from "./Filter";
import data from "../../data.json";
import Pagination from '../PageShop/Pagination';
import {getProductsFiltred} from '../apiProduct'
export default class Home extends Component{
  constructor(){

    super();
   this.childRef= React.createRef();
    this.state={
      products:[],
 
      loading: false,
currentPage: 1,
prodsPerPage: 16,
      size:"",
      sort:"",
 childState:{},
    };

  }
 
  setProducts(filter)
  {
    console.log(filter);
    var f;
 if(filter.category!=null)
 {

 
f="category="+filter.category

   console.log(f)
}

if(filter.color!=null)
{
f=f+"&color="+filter.color;
   console.log(f);
}
if(filter.price!=null)
{
f=f+"&price="+filter.price;
}

if(filter.price!=null)
{
f=f+"&size="+filter.size;
}


getProductsFiltred(f).then((e)=>{  this.state.products=[];var joined = this.state.products.concat(e);
  this.setState({products:joined})})
  }

componentDidMount()
{
  getProductsFiltred("category=Furniture").then((e)=>{ var joined = this.state.products.concat(e);
    this.setState({products:joined});console.log(this.state.products)})
}
    
    render() {

    
     
      const { currentPage, prodsPerPage, produits, products, loading } = this.state;
const prod=this.state.produits;
      const indexOfLastProd = currentPage * prodsPerPage;
      const indexOfFirstProd = indexOfLastProd - prodsPerPage;
      const currentProd = products.slice(indexOfFirstProd, indexOfLastProd);
  
      const paginate = pageNum => this.setState({ currentPage: pageNum });
  
      const nextPage = () => this.setState({ currentPage: currentPage + 1 });
  
      const prevPage = () => this.setState({ currentPage: currentPage - 1 });
  
        return(
            <div>
              <p> </p>
                <div><Filter  onSelected ={(e)=>{this.setProducts(e)}} ref={this.childRef}  /></div>
                <div><Products products={this.state.products} 
                products={currentProd} loading={loading}>
              </Products></div>
              <Pagination prodsPerPage={prodsPerPage} totalProducts={products.length} 
              paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            </div>
            
        )}

      
    }


  