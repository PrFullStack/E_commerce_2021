import React ,{Component, useState} from "react"
/* import { Left } from "react-bootstrap/lib/Media";
import { Container } from "react-bootstrap/lib/Tab"; */
// Using an ES6 transpiler like Babel
//import RangeSlider from 'react-bootstrap-range-slider';
import { Range } from 'react-range';


export default class Filter extends Component{
    state={
        products:[],
        categories:[],
        values: [50] 
        
    }
   
  
     /* constructor(props){
        // this.newArr=[]
    
 } */
 //range

 

    componentDidMount(){
        fetch("http://localhost:9393/products/all").then(res=>res.json()).then(resultat=>{
            var categorieSet=new Set();
            resultat.Products.forEach(product => {
                categorieSet.add(product.category);
            });
            console.log(this.state.products);
            console.log({categorieSet});
            this.setState({products:resultat.Products,categories:Array.from(categorieSet)});
            console.log('ssdsdsdsd',this.state.categories);


    })
        //console.log(newAarr);
       
    }
    render(){
        let { volume } = this.state
        
        return(
                   
                    //    this.state.products && (
                        
                    //    )


                    
                       
            <div class="column">
                
               <div id="left-column" class="sidebar col-xs-12 col-sm-12 col-md-4 col-lg-3">
                   <div class="bolck-categories block block-highlighted hidden-sm-down">
                       <h6 class="title_block"><a href="">Shop</a></h6>
                       
                       <div class="block_content">
                           <ul class="category-top-menu">
                               {this.state.categories.map(category=>(
                                   <li data-depth="0">
                                   <a href="">{category}</a>

                               </li>

                               ))}

                           </ul>
                       </div>
                       </div>
                       <div id="search_filters" ><p class="text-uppercase h6 hidden-sm-down">Filter By</p>
                       
                      
                       <section   class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Categories</p>

                           <div className="filter-sort">
                           
                        
                            
                                    
                                
                               
                                <input type="checkbox" id="scales" name="scales"
                                         ></input>
                                <label  for="scales">Scales</label>
                                </div>

                                <div >
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Horns</label>
                                
                                
                                
                                </div>
                       </section>
                       
                      
                      
                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Color</p>
                           <div>
                                <input type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">White</label>
                                </div>

                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Black</label>
                                </div>
                        </section>
                        
                       

                       


     

                                
                 </div>
                 
            
                                
{/*                       
                       
                       <div id="search_filters" ><p class="text-uppercase h6 hidden-sm-down">Filter By</p>
                       <section   class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Categories</p>

                           <div className="filter-sort">
                           
                        
                            
                
                               
                                <input type="checkbox" id="scales" name="scales"
                                         ></input>
                                <label  for="scales">Scales</label>
                                </div>

                                <div >
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Horns</label>
                                
                                
                                
                                </div>
                       </section>
                    


                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Color</p>
                           <div>
                                <input type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">White</label>
                                </div>

                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Black</label>
                                </div>
                                
                       </section>


                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Size</p>

                           <div>
                                <input type="checkbox" id="scales" name="scales"
                                       ></input>
                                <label for="scales">All</label>
                                </div>
                           <div>
                                <input type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">S</label>
                                </div>

                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">M</label>
                                </div>
                                <div>
                                <input type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">L</label>
                                </div>

                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">XL</label>
                                </div>
                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">XXL</label>
                                </div>
                                
                       </section>

                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Prise</p>
                           <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">ALL</label>
                                </div>
                           <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Rs.0-100</label>
                                </div>
                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Rs.100-500</label>
                                </div>
                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Rs.500-1000</label>
                                </div>
                                
                       </section>
                       </div>
                       

 */}



            <div className="filter">
            {/* <div className="filter-result">{this.props.count} product</div> */}
                
            {/* <div className="filter-sort">
                Ctegories{" "}
                <select value={this.props.size} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="hightest">Hightest</option>
                </select>
                </div>
            <div className="filter-size">
                Size Filter{" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
             </div>
             <div className="filter-price">
                 Filter Price{" "}
            <select value={this.props.size} onChange={this.props.filterProducts}> 
                <option value="">All</option>
                    <option value="0-2000">Rs.0-100</option>
                    <option value="100-500">Rs.100-500</option>
                    <option value="500-1000">Rs.500-1000</option>
                    <option value="1000-2000">Rs.1000-2000</option></select>
    
    
  
                
        </div>
        
    </div> */}
    
    </div>
    
    </div>
    </div>

    
                               
            
        );
    }
}