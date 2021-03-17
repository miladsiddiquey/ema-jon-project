import  React  from "react";
import './App.css';
import Header from "./component/Header/Header";
import Shop from "./component/Header/Shop/Shop";
import Review from "./component/Review/Review";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from "./component/Inventory/Inventory";
import NoFount from "./component/NoFound/NoFount";
import ProdactDatil from "./component/ProdactDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
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
      
      
    </div>
  );
}

export default App;
