import styled, { ThemeProvider, keyframes } from "styled-components";
import Nav from "./components/nav";
import Services from "./components/services";
import About from "./components/about/about";
import Apresentation from "./components/apresentation";
import Contato from "./components/contato";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import { Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Login from "./components/admin/login";
import { AppProvider } from "./AppProvider";

function App() {
  const theme = {
    purple: "#9b6ed0",
  };

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyle />
        <AppContainer>
          <Nav />
          <Content id="content">
            <Route
              path="/"
              component={() => (
                <>
                  <Apresentation />
                  <Services />
                  <About />
                  <Projects /> <Contato />
                </>
              )}
            />

            <Route path="/admin" component={() => <Login />} />

            <Footer />
          </Content>
        </AppContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
`;
const anima = keyframes`
0%{
  opacity:0
}
100%{
  opacity:1
}
`;
const Content = styled.div`
  width: 100%;
  max-width: 2000px;
  height: 100%;
  padding: 0 4rem;
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: 2rem;
  animation: ${anima} 2s;

  @media (max-width: 600px) {
    padding: 0;
    padding-left: 3rem;
  }
`;
