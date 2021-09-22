import React ,{Component, useState,value,setValue,rangeSelector} from "react"
/* import { Left } from "react-bootstrap/lib/Media";
import { Container } from "react-bootstrap/lib/Tab"; */
// Using an ES6 transpiler like Babel
//import RangeSlider from 'react-bootstrap-range-slider';
import {Slider ,   SliderInput,  SliderTrack,  SliderRange,  SliderHandle,  SliderMarker,} from "@reach/slider";
import "@reach/slider/styles.css";
{/* <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
</link>
</meta> */}

//-----JS for Price Range slider-----



export default class Filter extends Component{
    state={
        products:[],
        values: [50] ,
        category:[]  ,   
        color:[],
        price:[],
        size:[],
        
        
        
        
    }
    



   
  // Our States
/* const [value, setValue] = React.useState([2,10]); */

// Changing State when volume increases/decreases
 
     /* constructor(props){
        // this.newArr=[]
    
 } */
 //filter categorie
 

    /* handleCategory = (category) => {
       
        if(checked.has(category._id)) {
            checked.delete(category._id)
        }
        else{
            checked.add(category._id)
        }
        
        handleFilters(Array.from(checked))

    } */

    

 //range
 setFilterCategory(p,e)
    {
      
if (e.target.checked==true)
{
    
    this.state.category=p;
 this.props.onSelected(this.state);

}
else{
    this.state.category=null;
}


    }
    setFilterPrice(p,e)
    {
     
        if (e.target.checked==true)
        {
            
            this.state.price=p;
         this.props.onSelected(this.state);
        
        }
        else{
            this.state.price=null;
        }

    }




    setFilterColor(p,e)
    {
     
        if (e.target.checked==true)
        {
            
            this.state.color=p;
         this.props.onSelected(this.state);
        
        }
        else{
            this.state.color=null;
        }

    }
    setFilterSize(p,e)
    {
        if(e.target.checked==true)
        {
            this.state.size=p;
            this.props.onSelected(this.state);
        }
        else{
            this.state.size=null
        }
    }
    
    


 

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
        /* let { volume } = this.state */
        
        return(
                   
                    


                    
                       
            <div class="column">
                
         
                
               <div id="left-column" class="sidebar col-xs-12 col-sm-12 col-md-4 col-lg-3">
                   <div class="bolck-categories block block-highlighted hidden-sm-down">
                       {/* <h6 class="title_block"><a href="">Shop</a></h6> */}
                       
                       <div class="block_content">
                           <ul class="category-top-menu">
                               {/* {this.state.category.map(category=>(
                                   <li data-depth="0">
                                   <a href="">{category}</a>
                                   

                               </li>

                               ))} */}
                               {/* <li data-depyh="0">
                                   <a href="" >Computer</a>

                               </li>
                               <li data-depyh="1">
                                   <a href="" >Furniteur</a>

                               </li>
                               <li data-depyh="2">
                                   <a href="" >Clothes</a>

                               </li> */}

                           </ul>
                       </div>
                       </div>
                       <div id="search_filters" ><p class="text-uppercase h6 hidden-sm-down">Filter By</p>
                       
                      
                       <section   class="facet clearfix">
                           <p  class="h6 facet-title hidden-sn-down">Categories</p>
                           <label class="container">All
                                    <input type="radio" checked="checked" name="radio"onChange={(e)=>this.setFilterCategory("",e)} />
                                    <span class="checkmark"></span>
                                    </label>
                            <label class="container">Computer
                                    <input type="radio" checked="checked" name="radio"onChange={(e)=>this.setFilterCategory("Computer",e)} />
                                    <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Furniture
                                    <input type="radio" name="radio" onChange={(e)=>this.setFilterCategory("Furniture",e)} />
                                    <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Clothes
                                    <input type="radio" name="radio" onChange={(e)=>this.setFilterCategory("Clothes",e)} />
                                    <span class="checkmark"></span>
                                    </label>
                               
                               {/*  <label>
                           <div>
                               
                                <input type="checkbox" class="radio" name="foby[1][]"onChange={(e)=>this.setFilterCategory("Computer",e)} type="checkbox" 
                                        ></input>
                                <label >Computer</label>
                                </div>

                                <div>
                                <input type="checkbox" class="radio" name="foby[1][]"onChange={(e)=>this.setFilterCategory("Furniture",e)} type="checkbox" id="horns" name="horns" ></input>
                                <label for="horns">Furniture</label>
                                </div>
                                <div>
                                <input  type="checkbox" class="radio" name="foby[1][]"onChange={(e)=>this.setFilterCategory("Clothes",e)}  type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Clothes</label>
                                
                                </div>
                                </label> */}
                       </section>
                       
                      
                      
                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Color</p>
                           <label class="container">All
                                <input type="radio" checked="checked" name="radio"onChange={(e)=>this.setFilterColor("",e)} />
                                <span class="checkmark"></span>
                                </label>
                           <label class="container">White
                                <input type="radio" checked="checked" name="radio"onChange={(e)=>this.setFilterColor("white",e)} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Black
                                <input type="radio" name="radio" onChange={(e)=>this.setFilterColor("Black",e)} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Red
                                <input type="radio" name="radio" onChange={(e)=>this.setFilterColor("Red",e)} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Yellow
                                <input type="radio" name="radio" onChange={(e)=>this.setFilterColor("Yellow",e)} />
                                <span class="checkmark"></span>
                                </label>
                           {/* <div>
                                <input  onChange={(e)=>this.setFilterColor("white",e)} type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">White</label>
                                </div>

                                <div>
                                <input  onChange={(e)=>this.setFilterColor("black",e)} type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Black</label>
                                </div> */}
                        </section>
                        <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Size</p>
                           <label class="container">All
                                <input type="radio" checked="checked" name="radio"onChange={(e)=>this.setFilterSize("",e)} />
                                <span class="checkmark"></span>
                                </label>
                           <label class="container">S
                                <input type="radio" checked="checked" name="radio"onChange={(e)=>this.setFilterSize("S",e)} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">L
                                <input type="radio" name="radio" onChange={(e)=>this.setFilterSize("L",e)} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">XL
                                <input type="radio" name="radio" onChange={(e)=>this.setFilterSize("XL",e)} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">xxL
                                <input type="radio" name="radio" onChange={(e)=>this.setFilterSize("XXL",e)} />
                                <span class="checkmark"></span>
                                </label>
                                </section>
                           {/* <div>
                                <input  onChange={(e)=>this.setFilterSize("S",e)} type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">S</label>
                                </div>

                                <div>
                                <input  onChange={(e)=>this.setFilterSize("L",e)} type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">L</label>
                                </div>
                                <div>
                                <input  onChange={(e)=>this.setFilterSize("xL",e)} type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">XL</label>
                                </div>
                                <div>
                                <input  onChange={(e)=>this.setFilterSize("xxL",e)} type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">XXL</label>
                                </div> */}
                                <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Price</p>
                           <label class="container">All
                                <input type="radio" checked="checked" name="radio"onChange={(e)=>this.setFilterprice("",e)} />
                                <span class="checkmark"></span>
                                </label>
                           <label class="container">100$-200$
                                <input type="radio" checked="checked" name="radio"onChange={(e)=>this.setFilterprice("100$-200$",e)} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">200$-500$
                                <input type="radio" name="radio" onChange={(e)=>this.setFilterprice("200$-500$",e)} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">500$-1000$
                                <input type="radio" name="radio" onChange={(e)=>this.setFilterSprice("500$-1000$",e)} />
                                <span class="checkmark"></span>
                                </label>
                                
                                
                                
                        </section>

                      {/*   <div data-role="page">
  <div data-role="header">
    <h1>Range Slider</h1>
  </div>

  <div data-role="main" class="ui-content">
    <form method="post" action="/action_page_post.php">
      <div data-role="rangeslider">
        <label for="price-min">Price:</label>
        <input type="range" name="price-min" id="price-min" value="200" min="0" max="1000"/>
        <label for="price-max">Price:</label>
        <input type="range" name="price-max" id="price-max" value="800" min="0" max="1000"/>
      </div>
        <input type="submit" data-inline="true" value="Submit"/>
       
      </form>
  </div>
</div>  */}
                        
                        


    


                       
                        
                        
                       

                       


     

                                
                 </div>
                 {/* <p class="h6 facet-title hidden-sn-down">Price</p>
                        <SliderInput min={0} max={200} step={10}>    
                          <SliderTrack>      
                                <SliderRange />   
                                     <SliderHandle />    
                                  </SliderTrack>  
                          </SliderInput> */}
            
                                
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