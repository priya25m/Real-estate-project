import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hfwz6oy8w6lyzulf.us.auth0.com"
      clientId="QEXG1jmwtmuSKcGJlBrzTQFg1tBwsCLu"
      authorizationParams={{
        redirect_url: "http://localhost:3000",
      }}
      audience=""
      http:scope="openid profile email" //localhost:8000"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
