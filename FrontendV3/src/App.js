import React from "react";
import Header from './components/Header';
import {Third} from './components/Third';
import Panier from './components/pagePanier/Panier';
import Detail from './components/PageDescription/Detail';
import About from "./components/About";
import Shop from './components/PageShop/Shop';
import Home from "./components/PageHome/Home";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Desc from "./components/PageDescription/Desc";

function App() {

return(

<div>
<BrowserRouter>
<Header/>
<Switch>
<Route path="/panier">
                       <Panier/>
                   </Route>
                 <Route path="/detail/:id">
                       <Desc />
                   </Route>
                  <Route path="/about">
                       <About />
                   </Route>
                   <Route path="/shop">
                       <Shop />
                    </Route>
                   <Route path="/login">
                      <Login/>
                   </Route>
                   <Route path="/register">
                      <Register/>
                   </Route>
                   <Route path="/">
                       <Home />
                   </Route>
              </Switch>
             
              <Third/>
  </BrowserRouter>
</div>

);
  
  }


export default App;