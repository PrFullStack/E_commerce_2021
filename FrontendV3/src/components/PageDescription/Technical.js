import React, {Component} from 'react';

import '../css/des.scss'

export default class Technical extends Component{
  
    
  
    
   
      render(){
     
        let product=this.props.product;
     if(product!=undefined)
     {
        
    if(product.category=='Computer')
    {
    
        return(
         
          <div class="infos_details">
        
          <section >
  
          <div class="fiche">
          <div class="fiche-title">   
        <h1 >Fiche Technique</h1>
        
     
       </div>
       <div class="fiche-content">
          <div class="des"> 
          <div class="des-title">   
         <h1> DESCRIPTIF TECHNIQUE</h1>
         </div>
         <ul>
           <li>
SKU: HP017CL0ARWZANAFAMZ</li><li>
Modèle: EliteBook 840 G3</li><li>
Poids (kg): 1.54</li></ul>
            </div> 

            <div class="principal"> 
          <div class="principal-title">  
        <h1 >Principales caractéristiques</h1>
          </div>
           
          
         




            
               <ul>
                 <li>
                   
        processor: {product.processor}
                 </li>
                 <li>
               screen:  {product.screen} G
                 </li>
                 <li>
                 color: {product.color} G
                 </li>
                 <li>
                 capacity: {product.capacity} G
                 </li>
                 <li>
                 Ram:{product.memory} G
                 </li>
                 <li>
                 OS: {product.os}
                 </li>
<li>Battery: 46Wh, Li-ion, 3-cell.</li>
               </ul>
               </div>
               </div>
               </div>
          </section>



          <section >
  
  <div class="fiche">
  <div class="fiche-title">   
<h1 >Détails</h1>


</div>
<div class="fiche-content">

  <p>PC PORTABLE AMD Ryzen 5 4500U quad 8GB DDR4 1DM 512GB PCIeAMD Radeon Vega Integrated Graphics15.6 HD Antiglare slim SVA Narrow Border.KBD JTB ISK 
  STD CP num kypd AFRC-F3 cells 41Whr Wifi ac 1x1 MU-MIMO + BT 4.2OST W10H6 SL AF PPP Jet Black  1/1/0 </p>
  
 
 <p></p>


    
       </div>
       </div>
  </section>



               </div>
       

       
        );}
        else{
          return(<p>444</p>)
        }
      
      }


       
      };
     
      
}