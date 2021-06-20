import React from "react";
// style
import "./Header.css";
// React Router
import { Link, NavLink } from "react-router-dom";
// components
import { VscClose as CloseIcon } from "react-icons/vsc";
// redux
import { connect } from "react-redux";
import { closeMenu } from "../../redux/mobileMenu/MobileMenuActions";

const MobileMenu = (props) => {
  return (
    <div
      className="mobile-menu"
      style={
        props.isMenuOpen
          ? { right: "0px", opacity: "0.96" }
          : { transform: "translateX(900px)", opacity: "0" }
      }
    >
      <div className="w-100 d-flex justify-content-end">
        <CloseIcon className="close-icon" onClick={() => props.closeMenu()} />
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
