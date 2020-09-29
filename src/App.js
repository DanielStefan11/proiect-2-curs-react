import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import Login from "./pages/loginPage/Login";
import Page404 from "./pages/page404/Page404";
import Category from "./pages/productCategoryPage/Category";
import Cart from "./pages/cartPage/Cart";
import Favorites from "./pages/favoriteProducts/Favorites";
import TermsAndConditions from "./pages/terms&conditionsPage/TermsAndConditions";
import "./utils/utility-classes.css";
import Product from "./pages/productPage/Product";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorite" component={Favorites} />
        <Route path="/about" component={About} />
        <Route path="/category/:categoryName" component={Category} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/termeni-si-conditii" component={TermsAndConditions} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
