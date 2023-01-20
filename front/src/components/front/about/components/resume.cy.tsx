import React from "react";
import Resume from "./resume";
import bffResponseAll from "../../../../../cypress/fixtures/bffResponseAll.json";
import { AppProvider } from "AppProvider";
import { socialNet } from "components/commons/socialMap";
import GlobalStyle from "globalStyles";
import StatusInterceptor from "services/interceptor";

describe("<Resume />", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "http://localhost:3001/userInfo//616c7563f3b4049ea0f592ef",
      bffResponseAll
    );
    cy.mount(
      <AppProvider>
        <StatusInterceptor>
          <GlobalStyle />
          <Resume />
        </StatusInterceptor>
      </AppProvider>
    );
  });
  it("should show name and social network", () => {
    cy.getDataCy("bio").within(() => {
      const { bio, languages } = bffResponseAll.resumes["pt-br"];
      const { avatar_url, name, location } = bffResponseAll.profile;
      cy.contains(name);
      cy.contains(bio);
      cy.contains(location);
      cy.contains(languages[0].name);
      cy.get("#photo").should("have.attr", "src", avatar_url);
    });
  });
});
