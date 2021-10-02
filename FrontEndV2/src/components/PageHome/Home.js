import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // npm install bootstrap 
import {Slider} from './Slider';
import {Products} from './ListeProducts';


export default class Home extends Component{

    render(){
        return(
<div>
     <Slider/> 
     <Products/>
</div>

        )
    }

}