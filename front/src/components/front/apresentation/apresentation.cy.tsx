import { AppProvider } from "AppProvider";
import GlobalStyle from "globalStyles";
import StatusInterceptor from "services/interceptor";
import Apresentation from "./apresentation";
import bffResponseAll from "../../../../cypress/fixtures/bffResponseAll.json";
import { socialNet } from "components/commons/socialMap";

describe("<Apresentation />", () => {
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
          <Apresentation />
        </StatusInterceptor>
      </AppProvider>
    );
  });
  it("should show name and social network", () => {
    cy.get("#home").within(() => {
      const { name, contact } = bffResponseAll.profile;
      cy.contains(name.split(" ")[0]);
      cy.contains("Entre em contato");
      Object.keys(contact).map((key) => {
        const contactKey = key as keyof Contact;
        const expectedUrl = socialNet(contactKey, contact[contactKey]).link;

        cy.get(`[href="${expectedUrl}"]`);
      });
    });
  });
  it("should generate resume pdf", () => {
    cy.get("#home").within(() => {
      cy.contains("Baixar Curriculo").click();
    });
  });
});
