import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContextProvider from "./Context/AppContext";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
      <Toaster />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
