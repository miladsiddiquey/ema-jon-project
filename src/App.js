import  React  from "react";
import './App.css';
import Header from "./component/Header/Header";
import Shop from "./component/Header/Shop/Shop";
import Review from "./component/Review/Review";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Inventory from "./component/Inventory/Inventory";
import NoFount from "./component/NoFound/NoFount";
import ProdactDatil from "./component/ProdactDetail/ProductDetail";
import Shipment from "./component/Shipment/Shipment";
import Login from "./component/Login/Login";
import { createContext } from "react";
import { useState } from "react/cjs/react.development";
import PrivetRout from "./component/PrivetRout/PrivetRout";

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h3>Email: {loggedInUser.email}</h3>
      
      <Router>
      <Header></Header>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <PrivetRout path="/inventory">
              <Inventory></Inventory>
            </PrivetRout>
            <PrivetRout path="/shipment">
              <Shipment></Shipment>
            </PrivetRout>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProdactDatil></ProdactDatil>

            </Route>
            <Route path="*">
              <NoFount></NoFount>
            </Route>
          </Switch>
      </Router>
      
      
    </UserContext.Provider>
  );
}

export default App;
