import React, {Component} from 'react';
import DetailsThumb from '../PageDescription/DetailsThumb';
import '../css/Detail.css';

export default class Description extends Component{
    state = {
        products: [
          {
            "_id": "1",
            "title": "Nike Shoes",
            "src": [
                "https://i15.servimg.com/u/f15/18/87/51/25/110.png",
                "https://i15.servimg.com/u/f15/18/87/51/25/210.jpg",
                "https://i15.servimg.com/u/f15/18/87/51/25/311.jpg",
                "https://i15.servimg.com/u/f15/18/87/51/25/410.jpg"
              ],
            "description": "Chaussures de Basket-Man",
            "content": "Conçue pour un jeu polyvalent, la chaussure de basketball Nike Zoom Rev 2017 pour Homme est dotée d'une empeigne en tissu respirante et d'une semelle extérieure à rainures pour rester léger et rapide sur vos pieds. L'unité Nike Zoom Air offre une protection performante contre les chocs. Cette chaussure offre également une excellente adhérence sur les côtés.",
            "price": 150,
            "colors":["red","black","crimson","teal"],
            "count": 1
          }
        ],
        index: 0
      };
    
      myRef = React.createRef();
    
      handleTab = index =>{
        this.setState({index: index})
        const images = this.myRef.current.children;
        for(let i=0; i<images.length; i++){
          images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
      };
    
      componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
      }
    
    
      render(){
        const {products, index} = this.state;
        return(
          <div className="app">
            {
              products.map(item =>(
                <div className="details" key={item._id}>
                  <div className="big-img">
                    <img src={item.src[index]} alt=""/>
                  </div>
    
                  <div className="box">
                    <div className="row">
                      <h2>{item.title}</h2>
                      <span>${item.price}</span>
                    </div>
                  
                    <p>{item.description}</p>
                    <p>{item.content}</p>
    
                    <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                    <button className="cart">Add to cart</button>
    
                  </div>
                </div>
              ))
            }
          </div>
        );
      };
}