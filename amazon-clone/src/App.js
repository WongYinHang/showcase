import React, { useEffect } from 'react';
import Header from "./Header.js"
import Home from "./Home.js"
import Checkout from "./Checkout"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login.js';
import { auth } from './firebase';
import { useStateValue } from './StateProvider.js';
import Payment from './Payment.js';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders.js"
function App() {
  const promise = loadStripe("pk_test_51HW8UID9uTsL4QbY0ztndSaKnIDd9CYteWGxpjso9bMjySuvNBFo9lsyaTfeZXWT33DLuY4csT2EeEAFk1xv91oy00XK6d7VuJ")
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>> ", authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    //will only run once when the app component loads with nothing in []
  }, [])

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

//hosting at https://clone-c52a5.web.app
//firebase deploy --only hosting
//firebase init        
//firebase init  && npm run build && firebase deploy --only hosting  **** to deploy
//npm install -g serve
//serve -s build
//firebase init hosting
//firebase deploy --only hosting
//firebase deploy --only functions