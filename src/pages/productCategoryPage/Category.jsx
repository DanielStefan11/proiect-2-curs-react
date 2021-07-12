import React, { Component } from "react";
// Data
import products from "../../utils/products.json";
// Components
import Layout from "../../components/layout/Layout";
import ProductList from "../../components/productList/ProductList";
import ProductFilters from "../../components/productFilters/ProductFilters";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      items: [],
      // filters data
      laptopsByName: [
        {
          label: "",
          value: "",
        },
      ],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const categoryName = match.params.categoryName;
    this.setState({
      category: products[categoryName],
      items: products[categoryName].items,
    });
  }

  render() {
    return (
      <Layout>
        <div className="container-fluid container-min-max-width">
          <h2 className="text-center mt-5 mb-3">{this.state.category.name}</h2>
          <ProductFilters />
          <ProductList products={this.state.items} />
        </div>
      </Layout>
    );
  }
}

export default Category;
