import React,{Component} from 'react';
 // npm install bootstrap 
import Description from '../PageDescription/Description';
import Technical from './Technical'
import Suggest from '../PageDescription/Suggest';


export default class Detail extends Component {
    state = {
        product: [
  
        ],
     
      };
  
    render(){
        return(
<div>
 
     <Description product={this.state.product} /> 

<Suggest/>
</div>

        )
    }

}