import React,{Component} from 'react';
 // npm install bootstrap 
import Description from '../PageDescription/Description';
import Technical from './Technical'
import Suggest from '../PageDescription/Suggest';
import {getProduct} from '../apiProduct'
export default class Detail extends Component{
    state = {
        product: [
  
        ],
     
      };
    componentDidMount()
      {
          getProduct("ref4").then((e)=>{
            this.setState({product:e} );console.log(e)})
          
          
          }
    render(){
        return(
<div>
 
     <Description product={this.state.product} /> 
  <Technical product={this.state.product} />
<Suggest/>
</div>

        )
    }

}