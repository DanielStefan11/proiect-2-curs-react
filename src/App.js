import React from "react";
// CSS
import "./App.css";
import "./utils/utility-classes.css";
// React Router
import { Switch, Route } from "react-router-dom";
// Pages
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import Login from "./pages/loginPage/Login";
import Page404 from "./pages/page404/Page404";
import Category from "./pages/productCategoryPage/Category";
import Cart from "./pages/cartPage/Cart";
import Favorites from "./pages/favoriteProducts/Favorites";
import Product from "./pages/productPage/Product";
import TermsAndConditions from "./pages/terms&conditionsPage/TermsAndConditions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollBtnVizibility: false,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", (e) => {
      this.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 200) {
      this.setState({ scrollBtnVizibility: true });
    } else {
      this.setState({ scrollBtnVizibility: false });
    }
  }

  handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            exact
            path="/"
            render={() => (
              <Home
                scrollBtnVizibility={this.state.scrollBtnVizibility}
                handleScrollToTop={() => this.handleScrollToTop()}
              />
            )}
          />
          <Route path="/cart" component={Cart} />
          <Route path="/favorite" component={Favorites} />
          <Route
            path="/about"
            render={() => (
              <About
                scrollBtnVizibility={this.state.scrollBtnVizibility}
                handleScrollToTop={() => this.handleScrollToTop()}
              />
            )}
          />
          <Route
            path="/category/:categoryName"
            component={Category}
            // render={() => (
            //   <Category
            //     scrollBtnVizibility={this.state.scrollBtnVizibility}
            //     handleScrollToTop={() => this.handleScrollToTop()}
            //   />
            // )}
          />
          <Route path="/product/:productId" component={Product} />
          <Route
            path="/termeni-si-conditii"
            render={() => (
              <TermsAndConditions
                scrollBtnVizibility={this.state.scrollBtnVizibility}
                handleScrollToTop={() => this.handleScrollToTop()}
              />
            )}
          />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
