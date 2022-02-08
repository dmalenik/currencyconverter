/*
 ** import reset css in react
 ** add bootstrap css to react
 ** https://react-bootstrap.github.io/getting-started/introduction/
 */

/*
 ** make api request in bootstrap
 ** https://api.nbp.pl/api/exchangerates/tables/a/
 */

/*
 ** make a structure for the App component
 ** make logical components
 ** insert components in this structure
 */

import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
