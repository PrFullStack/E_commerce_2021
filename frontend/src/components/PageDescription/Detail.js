import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // npm install bootstrap 
import Description from '../PageDescription/Description';
import Comment from '../PageDescription/Comments';
import Suggest from '../PageDescription/Suggest';

export default class Detail extends Component{

    render(){
        return(
<div>
     <Description/> 
     <Comment/>
     <Suggest/>
</div>

        )
    }

}