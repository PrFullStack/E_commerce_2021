import React from 'react';
import './App.css';
import {First} from './components/First'
import {Second} from './components/Second'
import { Products } from './components/Products'
import {Third} from './components/Third'

function App() {
  return (
    <div>
     <First/>
        <Second/>
        <Products/>
    <Third/>
    </div>
        
  );
}

export default App;
