import React, {Component} from 'react';
import '../components/Description.css';
//import '../components/Comments.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // npm install bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import { Carousel } from 'react-bootstrap'; //npm i --save react-bootstrap-carousel


export class Suggest extends Component{

      render(){
        return(
          <div className="app">
           <div class="form-group">
             <label for="exampleTextarea" class="form-label mt-4">
                 <div class="customNavigation">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="https://i15.servimg.com/u/f15/18/87/51/25/110.png" alt="" width="100px" height="100px"/>Nike Shoes 1</a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="https://i15.servimg.com/u/f15/18/87/51/25/110.png" alt="" width="100px" height="100px"/>Nike Shoes 2</a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="https://i15.servimg.com/u/f15/18/87/51/25/110.png" alt="" width="100px" height="100px"/>Nike Shoes 3</a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="https://i15.servimg.com/u/f15/18/87/51/25/110.png" alt=""width="100px" height="100px"/>Nike Shoes 4</a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="https://i15.servimg.com/u/f15/18/87/51/25/110.png" alt="" width="100px" height="100px"/>Nike Shoes 5</a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#"><img src="https://i15.servimg.com/u/f15/18/87/51/25/110.png" alt="" width="100px" height="100px"/>Nike Shoes 6</a>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         
                 </div>
             </label>
            </div>
          </div>
        
        );
      };
}