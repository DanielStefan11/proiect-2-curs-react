import React from "react";
// Data
import products from "../../utils/products.json";
// Components
import Layout from "../../components/layout/Layout";
// CSS
import "./Product.css";
// Redux
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/CartActions";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/FavoritesActions";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const productId = match.params.productId;
    const categoryValues = Object.values(products);
    const productItems = categoryValues.reduce((acc, category) => {
      return [...acc, ...category.items];
    }, []);
    const currentProduct = productItems.find((product) => {
      return Number(productId) === product.id;
    });
    this.setState({ product: currentProduct });
    // console.log(this.props);
  }

  render() {
    const { product } = this.state;
    const { favoriteProducts } = this.props;
    const foundProduct = favoriteProducts.find(
      (favoriteProduct) => favoriteProduct.id === product.id
    );

    return (
      <Layout>
        <div className="product-page container-fluid container-min-max-width mb-5">
          <h1 className="my-5 h2 text-center">{product.name}</h1>
          <div className="product-info d-flex">
            <div className="image-wrapper d-flex mr-5">
              <img src={product.image} alt="Product presentation" />
            </div>
            <div className="product-details">
              <p className="h3 text-primary font-weight-bold">
                {product.price} {product.currency}
              </p>
              <div className="btn-container d-flex flex-column">
                <button
                  className="btn btn-dark mb-4 font-weight-bold"
                  onClick={() => {
                    this.props.addToCart({
                      product: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        currency: product.currency,
                        image: product.image,
                      },
                    });
                  }}
                >
                  Adaugă în coș
                </button>
                {!foundProduct ? (
                  <button
                    className="btn btn-dark mb-4 font-weight-bold"
                    onClick={() => {
                      this.props.addToFavorites(product);
                    }}
                  >
                    Adaugă la favorite
                  </button>
                ) : (
                  <button
                    className="btn btn-danger mb-4 font-weight-bold"
                    onClick={() => {
                      this.props.removeFromFavorites({ id: product.id });
                    }}
                  >
                    Elimină din favorite
                  </button>
                )}
              </div>
              <p>
                <span className="font-weight-bold">Brand</span>: {product.brand}
              </p>
              <p>
                <span className="font-weight-bold">Culoare:</span>{" "}
                {product.colour}
              </p>
              <p className="font-weight-bold mb-1">Descriere:</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteProducts: state.favorites.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    addToFavorites: (payload) => dispatch(addToFavorites(payload)),
    removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
