import React from "react";
// Components
import Header from "../header/Header";
import Footer from "../footer/Footer";
// CSS
import "./Layout.css";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
