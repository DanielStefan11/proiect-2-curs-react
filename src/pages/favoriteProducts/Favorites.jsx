import React from "react";
// Components
import Layout from "../../components/layout/Layout";
// React Router
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { removeFromFavorites } from "../../redux/favorites/FavoritesActions";
import { addToCart } from "../../redux/cart/CartActions";
// Icons
import { ReactComponent as Close } from "../../assets/icons/close.svg";
// CSS
import "./Favorites.css";

function Favorites(props) {
  return (
    <Layout>
      <div
        className="favorites-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
      >
        {props.products.length ? (
          <div className="favourites-container">
            <h1 className="text-center mb-5">Produsele tale favorite</h1>
            {props.products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="d-flex justify-content-between mt-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={product.image}
                      alt="Produs favorit"
                      className="mr-3"
                    />
                    <h3>{product.name}</h3>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="mr-3">
                      {product.price} {product.currency}
                    </h3>
                    <div
                      className="delete-btn"
                      onClick={() =>
                        props.removeFromFavorites({ id: product.id })
                      }
                    >
                      Șterge
                      <Close />
                    </div>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() =>
                        props.addToCart({
                          product,
                        })
                      }
                    >
                      Adaugă în coș
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="h3">Nu ai produse favorite!</p>
            <Link to="/">
              <button className="btn btn-outline-dark">Inapoi la home</button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    products: state.favorites.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)),
    addToCart: (payload) => dispatch(addToCart(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
