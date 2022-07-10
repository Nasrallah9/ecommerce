import React from "react";

import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/context";

import { FilterProvider } from "./context/filter_context";
import { Auth0Provider } from "@auth0/auth0-react";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterProvider>
        <App tab="home" />
      </FilterProvider>
    </AppProvider>
  </Auth0Provider>
);
