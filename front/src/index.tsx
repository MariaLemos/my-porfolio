import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "AppProvider";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components/macro";
import StatusInterceptor from "services/interceptor";
// import register from "./sw";
// register();
require("dotenv").config();

const theme = {
  purple: "#9b6ed0",
  blackTransparent: "rgba(0,0,0,0.7)",
  gradient: "linear-gradient(45deg, #576fe6, #9844b7, purple)",
  grey: "#303030;",
};
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <StatusInterceptor>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </StatusInterceptor>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
