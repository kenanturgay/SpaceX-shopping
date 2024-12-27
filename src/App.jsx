import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import "./App.css";
import ShopPage from "./pages/ShopPage";


function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        
      </Switch>
      
    </Router>
  );
}

export default App;