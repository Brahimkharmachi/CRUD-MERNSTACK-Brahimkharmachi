import React from "react";
import "./App.css"
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Homees from "./Componets/Home/Homes";
import Headerrs from "./Componets/Header/Headers";
import Footerrs from "./Componets/Footer/Footers";
import AddCartes from "./Componets/Addcarte/AddCartes";


export default function App() {
  return (


    <Router>
      <Headerrs/>
        <Switch>
          
          <Route exact path="/">
            <Homees />
          </Route>

          <Route path="/addproduit">
            <AddCartes />
          </Route>
        
        </Switch>
        <Footerrs />
    </Router>
  );
}