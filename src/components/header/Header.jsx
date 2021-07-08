import React from "react";
// React Router
import { Link, NavLink } from "react-router-dom";
// Images & icons
import Logo from "../../assets/images/logo-2.png";
// CSS
import "./Header.css";
// Redux
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/UserActions";
import { openMenu } from "../../redux/mobileMenu/MobileMenuActions";
import {
  openMenuDropdown,
  closeMenuDropdown,
} from "../../redux/menuDropdown/MenuDropdownActions";
// React Icons
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";
// components
import MobileMenu from "./MobileMenu";
import Overlay from "./Overlay";
// context
import { RoutesContext } from "../../context/routesContext/RoutesContext";

const Header = (props) => {
  const laptops = "laptops",
    smartphones = "smartphones",
    pcs = "PCs",
    accesories = "accesories",
    smarttvs = "smarttvs",
    cameras = "cameras";

  return (
    <RoutesContext.Consumer>
      {({ categories }) => (
        <header className="border-bottom">
          <div className="menu-container container-fluid h-100 container-min-max-width d-flex justify-content-between align-items-center">
            <Link to="/" className="my-3">
              <img src={Logo} alt="Sirluggia Shop" className="logo" />
            </Link>

            <div>
              <div className="links-container d-flex justify-content-end">
                <NavLink
                  exact
                  to="/"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#6A8ED9",
                  }}
                  className="h5 mr-3"
                >
                  Acasă
                </NavLink>

                <div
                  className="h5 mr-3 dropdown-btn"
                  onMouseEnter={() => props.openMenuDropdown()}
                >
                  Produse
                  <ArrowDown />
                </div>

                {props.isMenuDropdownOpen && (
                  <div
                    className="dropdown-wrapper"
                    onMouseLeave={() => props.closeMenuDropdown()}
                  >
                    {categories.map((categoryItem, index) => (
                      <Link
                        key={index}
                        to={`/${categoryItem}`}
                        onClick={() => props.closeMenuDropdown()}
                      >
                        {(() => {
                          if (categoryItem === laptops) return "Laptopuri";
                          if (categoryItem === smartphones)
                            return "Smartphone-uri";
                          if (categoryItem === pcs) return "PC-uri";
                          if (categoryItem === accesories) return "Accesorii";
                          if (categoryItem === smarttvs)
                            return "Televizoare smart";
                          if (categoryItem === cameras)
                            return "Camere foto și video";
                        })()}
                      </Link>
                    ))}
                  </div>
                )}

                <NavLink
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#6A8ED9",
                  }}
                  className="h5 mr-3"
                >
                  Despre
                </NavLink>

                <NavLink
                  to="/contact"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#6A8ED9",
                  }}
                  className="h5 mr-3"
                >
                  Contact
                </NavLink>

                {props.user ? (
                  <p className="logout h5" onClick={() => props.signOut()}>
                    Delogare
                  </p>
                ) : (
                  <Link to="/login" className="h5 mb-0">
                    Logare
                  </Link>
                )}
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex align-items-center">
                <Link to="/cart" className="d-flex">
                  <FaShoppingCart className="ml-2 added-products-icons" />
                  <p className="ml-1 mb-0">
                    <strong>{props.numberOfProducts}</strong>
                  </p>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <Link to="/favorite" className="d-flex">
                  <AiFillHeart className="ml-2 added-products-icons" />
                  <p className="ml-1 mb-0">
                    <strong>{props.numberOfFavoriteProducts}</strong>
                  </p>
                </Link>
              </div>
            </div>

            <button className="menu-icon" onClick={() => props.openMenu()}>
              <MenuIcon />
            </button>

            <Overlay />
            <MobileMenu />
          </div>
        </header>
      )}
    </RoutesContext.Consumer>
  );
};

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
    user: state.user.data,
    numberOfFavoriteProducts: state.favorites.products.length,
    isMenuOpen: state.mobileMenu.isOpen,
    isMenuDropdownOpen: state.menuDropdown.isDropdownOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logoutUser()),
    openMenu: () => dispatch(openMenu()),
    openMenuDropdown: () => dispatch(openMenuDropdown()),
    closeMenuDropdown: () => dispatch(closeMenuDropdown()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
