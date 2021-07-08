import React from "react";
// style
import "./Header.css";
// React Router
import { Link, NavLink } from "react-router-dom";
// components
import { VscClose as CloseIcon } from "react-icons/vsc";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";
// redux
import { connect } from "react-redux";
import { closeMenu } from "../../redux/mobileMenu/MobileMenuActions";
// context
import { RoutesContext } from "../../context/routesContext/RoutesContext";

const MobileMenu = (props) => {
  const laptops = "laptops",
    smartphones = "smartphones",
    pcs = "PCs",
    accesories = "accesories",
    smarttvs = "smarttvs",
    cameras = "cameras";

  return (
    <RoutesContext.Consumer>
      {({ categories }) => (
        <div
          className="mobile-menu"
          style={
            props.isMenuOpen
              ? { right: "0px", opacity: "0.96" }
              : { transform: "translateX(1000px)", opacity: "0" }
          }
        >
          <div className="w-100 d-flex justify-content-end">
            <CloseIcon
              className="close-icon"
              onClick={() => props.closeMenu()}
            />
          </div>

          <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "#6A8ED9",
              }}
              className="h5 mb-5"
              onClick={() => props.closeMenu()}
            >
              Acasă
            </NavLink>

            <div className="h5 mb-5 mobile-dropdown">
              <div className="btn-wrapper">
                Produse
                <ArrowDown />
              </div>

              <div className="d-flex flex-column  mt-3">
                {categories.map((categoryItem, index) => (
                  <Link key={index} to={`/${categoryItem}`} className="h6 mb-3">
                    {(() => {
                      if (categoryItem === laptops) return "Laptops";
                      if (categoryItem === smartphones) return "Smartphones";
                      if (categoryItem === pcs) return "PCs";
                      if (categoryItem === accesories) return "Accesories";
                      if (categoryItem === smarttvs) return "TVs";
                      if (categoryItem === cameras) return "Photo/Video";
                    })()}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: "bold",
                color: "#6A8ED9",
              }}
              className="h5 mb-5"
              onClick={() => props.closeMenu()}
            >
              Despre
            </NavLink>

            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: "bold",
                color: "#6A8ED9",
              }}
              className="h5 mb-5"
              onClick={() => props.closeMenu()}
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
      )}
    </RoutesContext.Consumer>
  );
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.mobileMenu.isOpen,
    user: state.user.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => dispatch(closeMenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
