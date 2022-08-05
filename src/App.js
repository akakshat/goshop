import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import {auth} from './firebase';

function App() 
{
  //useEffect <<<<<<<< POWERFUL
  // piece of code which runs on a given condition 

  // if we leave use effect blank it will run once 
  // when app component will loads and will not run again 
  // and if we load Cart over there it will run once 
  // and basket changes every single time it reloaded 

  // If you use a return in your useEffect than the 
  // result of that will run when the component is unmounted 


  const [{ user }, dispatch] = useStateValue();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if(authUser)
      {
        // the user is logged in 
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }

      else 
      {
        // the user is logged out 
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return() =>
    {
      //Any cleanup operations go in here
      unsubscribe(); 
    };
  }, [])

  console.log( "USER IS>>>>", user);

  return (
  <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/*Default Route*/}
          <Route path="/">
            <Header /> 
            <Home /> 
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
