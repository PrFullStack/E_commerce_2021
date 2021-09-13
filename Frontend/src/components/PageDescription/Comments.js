import React, {Component} from 'react';
import '../css/Detail.css';

export default class Comments extends Component{

      render(){
       // const {products, index} = this.state;
        return(
          <div className="app">
           <div class="form-group">
           <div className="row">
             <label for="exampleTextarea" class="form-label mt-4"><h2>Commentaire</h2></label>
            </div>
              <textarea class="ireatxt" id="exampleTextarea" rows="5" height="" width="1000px"></textarea>
              <div className="box">
                <button className="cart">Add Comment</button>
                
              </div>
            </div>
          </div>
        
        );
      };
}