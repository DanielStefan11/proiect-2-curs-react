import React from "react";
// React Router
import { Link } from "react-router-dom";
// Icons
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
// CSS
import "./Footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="pt-3 mt-3 bg-light">
      <div className="container-fluid container-min-max-width d-flex justify-content-between">
        <div className="footer-group d-flex flex-column">
          <h3 className="h5">Link-uri rapide:</h3>
          <Link to="/about">Despre</Link>
          <Link to="/termeni-si-conditii">Termeni și condiții</Link>
        </div>
        <div className="footer-group">
          <h3 className="h5">Contactează-mă:</h3>
          <p className="m-0">
            <a href="mailto:dannielstefan592@gmail.com">
              <Mail className="mr-1 mb-1 footer-icon" />
              dannielstefan592@gmail.com
            </a>
          </p>
          <p className="m-0">
            <Phone className="mr-1 footer-icon" />
            +4076645****
          </p>
        </div>
        <div className="footer-group">
          <h3 className="h5">Contactează-mă:</h3>
          <p className="m-0">
            <a href="https://github.com/DanielStefan11">
              <GitHub className="mr-1 mb-1 footer-icon" />
              DanielStefan11
            </a>
          </p>
          <p className="m-0">
            <a href="https://www.linkedin.com/in/daniel-%C8%99tefan-c%C4%83lin-4359ba182/">
              <LinkedIn className="mr-1 footer-icon" />
              Daniel Ștefan Călin
            </a>
          </p>
        </div>
      </div>
      <div className="text-center py-3">
        &copy; Daniel Ștefan Călin, 2020 - {year}
      </div>
    </footer>
  );
}

export default Footer;
