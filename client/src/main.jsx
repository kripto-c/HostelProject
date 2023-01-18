import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store/index.js";
//Importando react bootstrap ------------>>
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.VITE_APP_AUTH0_DOMAIN}
        clientId={import.meta.VITE_APP_CLIENTID}
        redirectUri={window.location.origin}
        audience={import.meta.VITE_APP_AUDIENCE}
        scope={import.meta.VITE_APP_SCOPE}
      >
    <App />
    </Auth0Provider>
    </BrowserRouter>
    </Provider>
);