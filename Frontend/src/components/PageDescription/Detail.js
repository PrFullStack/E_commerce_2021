import React,{Component} from 'react';
 // npm install bootstrap 
import Description from '../PageDescription/Description';

import Suggest from '../PageDescription/Suggest';

export default class Detail extends Component{

    render(){
        return(
<div>
 
     <Description/> 
  
<Suggest/>
</div>

        )
    }

}