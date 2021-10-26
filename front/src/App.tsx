import styled, { ThemeProvider, keyframes } from "styled-components";
import Nav from "./components/nav";
import Services from "./components/services";
import About from "./components/about/about";
import Apresentation from "./components/apresentation";
import Contato from "./components/contato";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Admin from "./components/admin/admin";
import { useAppContext } from "AppContext";
import { useEffect } from "react";

function App() {
  const theme = {
    purple: "#9b6ed0",
    blackTransparent: "rgba(0,0,0,0.7)",
    gradient: "linear-gradient(45deg, #576fe6, #9844b7, purple)",
  };
  const { status } = useAppContext();
  useEffect(() => console.log(status), [status]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {status !== "loading" && (
        <AppContainer>
          <Nav />
          <Content id="content">
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <>
                    <Apresentation />
                    {/* <Services /> */}
                    <About />
                    <Projects /> <Contato />
                  </>
                )}
              />
              <Route path="/admin" component={() => <Admin />}></Route>
            </Switch>

            <Footer />
          </Content>
        </AppContainer>
      )}
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
