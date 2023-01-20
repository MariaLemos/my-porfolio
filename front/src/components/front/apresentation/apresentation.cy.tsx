import { AppProvider } from "AppProvider";
import GlobalStyle from "globalStyles";
import React from "react";
import Apresentation from "./apresentation";

describe("<Apresentation />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <AppProvider>
        <GlobalStyle />
        <Apresentation />
      </AppProvider>
    );
  });
});
