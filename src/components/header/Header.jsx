import React from "react";
// React Router
import { Link } from "react-router-dom";
// Images & icons
import Logo from "../../assets/images/logo-2.png";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-cart.svg";
// CSS
import "./Header.css";
// Redux
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/UserActions";
// React Icons
import { AiFillHeart } from "react-icons/ai";

function Header(props) {
  return (
    <header className="border-bottom mb-3">
      <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
        <Link to="/" className="my-3">
          <img src={Logo} alt="Sirluggia Shop" className="logo" />
        </Link>
        <div>
          {props.user ? <p>Salut, {props.user.displayName}!</p> : null}
          <div className="d-flex justify-content-end">
            {props.user ? (
              <p className="logout h5" onClick={() => props.signOut()}>
                Delogare
              </p>
            ) : (
              <Link to="/login" className="h5 mb-0">
                Logare
              </Link>
            )}
            <div className="d-flex align-items-center">
              <Link to="/cart" className="d-flex">
                <ShoppingCart className="ml-2" />
                <p className="ml-1 mb-0">{props.numberOfProducts}</p>
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <Link to="/favorite" className="d-flex">
                <AiFillHeart className="ml-2" size="2rem" />
                <p className="ml-1 mb-0">{props.numberOfFavoriteProducts}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
    user: state.user.data,
    numberOfFavoriteProducts: state.favorites.products.length,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
