import React, {Component} from 'react';
import {getProduct} from '../apiProduct'
import '../css/des.scss'
import ReactDOM from 'react-dom'; 
export default class Description extends Component{
    state = {
        products: [
  
        ],
        index: 0
      };
    
    myRef = React.createRef();
    
    
     /*
      remplace(id)
      {
   

         let element1 = document.getElementById(id)
          let element2 = document.getElementById('BigPhoto')
          ReactDOM.findDOMNode(element2).setAttribute('src',ReactDOM.findDOMNode(element1).getAttribute('src')) 
          
      }

      componentDidMount()
      {
          getProduct("ref4").then((e)=>{ var joined = this.state.products.concat(e);//id product
            this.setState({products:joined})})
          
          
          }
     
 displayListImages()
          {
            let imagesUrl=this.state.products[0];
        let images=[]
            for(var i=0;i<imagesUrl.path.length;i++)
            {   
              var id="img"+i;
images.push(<li><img id={id} onClick={ (e)=>this.remplace(e.target.id)} src={imagesUrl.path[i]}></img></li> )
       
                    
            }
            console.log("fin")
            return images;
           
          }*/
/********************************************************/
      render(){
   
        const {products, index} = this.state;
     if(this.props.products[0].category==='Clothes')
    {
     /* {this.displayListImages()}*/
        return(
         
          <div>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

          <section class="fiche">
        <header class="fiche-Titre">
       
        <h1 >Fiche Technique</h1>
        
       
        </header>
          <div class="productt">
            <div class="titlee">
            <h1 >Descriptif technique</h1>
            &ensp;

            <ul>
              <li>SKU :</li>
              <li> Modèle :</li>
              <li>Pays de production :</li>
              <li>Poids (kg) :</li>
            </ul>
            </div>
         
            <article class="col8 -pvs">
            
              <div class="titlee">
              
               <h1 >Principales caractéristiques</h1>
               &ensp;
               <ul>
                 <li>
                   Size : 
                 </li>
                 <li>
                   Color :
                 </li>
                 <li>
                   Category : 
                 </li>
                 <li>
                   Marque : 
                 </li>
               </ul>
              </div>
            </article>
          </div>

        </section>

          </div>
        );}
        else{
          return(<p>444</p>)
        }
      };
      //( product[0].category=='Clothes') 
    //  const {products, index} = this.state;
    //  if(){
       // const {products, index} = this.state;

      /*  if(Product[0].category=='Clothes')
        {*/
         // return(
           
    

//          );       
    
       //}
     // }
}