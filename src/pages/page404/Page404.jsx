import React from "react";
// Components
import Layout from "../../components/layout/Layout";
// Images
import Page404img from "../../assets/images/404page.png";
// React Router
import { Link } from "react-router-dom";

function Page404() {
  return (
    <Layout>
      <div className="d-flex flex-column justify-content-center align-items-center my-5">
        <img src={Page404img} alt="404" />
        <h3>Ups, ne pare rău, dar pagina căutată nu există!</h3>
        <Link to="/">
          <button className="btn btn-outline-dark mt-4">
            Înapoi la prima pagină
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default Page404;
