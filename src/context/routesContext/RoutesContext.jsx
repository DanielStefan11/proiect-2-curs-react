import React, { Component } from "react";
// data
import Products from "../../utils/products.json";

export const RoutesContext = React.createContext();

class RoutesProvider extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const categories = Object.keys(Products);
    this.setState({ categories });
  }

  render() {
    return (
      <RoutesContext.Provider
        value={{
          categories: this.state.categories,
        }}
      >
        {this.props.children}
      </RoutesContext.Provider>
    );
  }
}

export default RoutesProvider;
