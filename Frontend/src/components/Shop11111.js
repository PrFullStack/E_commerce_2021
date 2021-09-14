import React,{Component} from 'react';
import Products from "./Products";
import Filter from "./Filter";
import data from "../../data.json";
import axios from 'axios';
import Pagination from '../PageShop/Pagination';


export default class Home extends Component{
 

    constructor(){
        super();
        this.state={
          products:data.products,
          loading: false,
    currentPage: 1,
    prodsPerPage: 16,
          size:"",
          sort:"",
        };
      }
    


    render() {
      const { currentPage, prodsPerPage, products, loading } = this.state;

      const indexOfLastProd = currentPage * prodsPerPage;
      const indexOfFirstProd = indexOfLastProd - prodsPerPage;
      const currentProd = products.slice(indexOfFirstProd, indexOfLastProd);
  
      const paginate = pageNum => this.setState({ currentPage: pageNum });
  
      const nextPage = () => this.setState({ currentPage: currentPage + 1 });
  
      const prevPage = () => this.setState({ currentPage: currentPage - 1 });
        return(
            <div>
                <div><Filter/></div>
                <div><Products products={this.state.products} 
                products={currentProd} loading={loading}>
              </Products></div>
              <Pagination prodsPerPage={prodsPerPage} totalProducts={products.length} 
              paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            </div>
        )
    }

}