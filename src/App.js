import React, { useState } from 'react';
import Carousel from './components/Carosel/Carosel';
import Category from './components/Category/Category';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Android from './components/Android/Android';
import Camera from './components/Camera/Camera';
import Laptop from './components/Laptop/Laptop';
import Trending from './components/Trending/Trending';
import Review from './components/Review/Review';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
const App = () => {
  const [cart, setCart] = useState([]);
  //to handle cart value
  const handleCart = (pd) => {
    const matched = cart.find(cPd => cPd.key === pd.key)
    let count = 1;
    let newCart;
    if (matched) {
      matched.quantity = matched.quantity + count;
      const others = cart.filter(oPd => oPd.key !== pd.key)
      newCart = [...others, matched]
    }
    else {
      pd.quantity = count;
      newCart = [...cart, pd];
    }
    setCart(newCart);
  }
  //remove item 
  const removeItem = pd => {
    const RemovedCart = cart.filter(Rpd => Rpd.key !== pd.key);
    setCart(RemovedCart);
  }
  //place order 

  return (
    <Router>
      <Navigation cart={cart}></Navigation>
      <Carousel></Carousel>
      <div style={{ marginBottom: '20px' }}>
        <Category></Category>
      </div>


      <Switch>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/android">
          <Android handleCart={handleCart}></Android>
        </Route>
        <Route path="/camera">
          <Camera handleCart={handleCart}></Camera>
        </Route>
        <Route path="/laptop">
          <Laptop handleCart={handleCart}></Laptop>
        </Route>
        <Route path="/review">
          <Review setCart={setCart} removeItem={removeItem} cart={cart}></Review>
        </Route>
        <Route path="/place">
          <OrderPlaced></OrderPlaced>
        </Route>
        <Route exact path="/">
          <Trending handleCart={handleCart}></Trending>
        </Route>
        <Route path="*">
          <h1 style={{ textAlign: 'center' }}>404 error! page not found</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;