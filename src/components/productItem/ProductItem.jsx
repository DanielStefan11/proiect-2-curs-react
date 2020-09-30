import React from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import "./ProductItem.css";
// Redux
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/CartActions";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/FavoritesActions";
// React Icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function ProductItem(props) {
  const { name, price, currency, image, id, favoriteProducts } = props;
  const foundProduct = favoriteProducts.find(
    (favoriteProduct) => favoriteProduct.id === id
  );

  return (
    <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
      <Link
        to={`/product/${id}`}
        className="d-flex flex-column align-items-center"
      >
        <img src={image} alt="productPhoto" className="mb-2" />
        <p className="mb-1 text-center h5">
          <strong>{name}</strong>{" "}
        </p>
        <p className="text-center h5">
          {price} {currency}
        </p>
      </Link>
      <button
        className="btn btn-outline-dark"
        onClick={() =>
          props.addToCart({
            product: {
              id,
              name,
              price,
              currency,
              image,
            },
          })
        }
      >
        Adaugă în coș
      </button>
      <div className="favorites-btn-container">
        {!foundProduct ? (
          <AiOutlineHeart
            className="favorites-btn"
            size="2rem"
            color="#ff0f0f"
            onClick={() =>
              props.addToFavorites({
                id,
                name,
                price,
                currency,
                image,
              })
            }
          />
        ) : (
          <AiFillHeart
            className="favorites-btn"
            size="2rem"
            color="#ff0f0f"
            onClick={() =>
              props.removeFromFavorites({
                id,
              })
            }
          />
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favoriteProducts: state.favorites.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToFavorites: (product) => dispatch(addToFavorites(product)),
    removeFromFavorites: (product) => dispatch(removeFromFavorites(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
