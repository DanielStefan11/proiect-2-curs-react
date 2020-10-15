import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// CSS
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// Components
import App from "./App";
// React Router
import { BrowserRouter as Router } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
