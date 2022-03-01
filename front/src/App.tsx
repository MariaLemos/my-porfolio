import styled, { ThemeProvider, keyframes } from "styled-components";
import Nav from "./components/front/nav";
import About from "./components/front/about/about";
import Apresentation from "./components/front/apresentation";
import Contato from "./components/front/contato";
import Projects from "./components/front/projects/projects";
import Footer from "./components/front/footer";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Admin from "./components/admin/admin";
import { useAppContext } from "AppContext";
import Loading from "components/commons/loading";
import LOCALE from "config/locale.json";
import Button from "components/commons/button";
import { FaBug, FaEnvelope } from "react-icons/fa";
import Card from "components/commons/card";
function App() {
  const theme = {
    purple: "#9b6ed0",
    blackTransparent: "rgba(0,0,0,0.7)",
    gradient: "linear-gradient(45deg, #576fe6, #9844b7, purple)",
    grey: "#303030;",
  };
  const { status, lang } = useAppContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Loading />
      {status !== "loading" && status !== "error" && (
        <AppContainer>
          <Nav />
          <Content id="content">
            <Switch>
              <Route path="/admin" component={() => <Admin />}></Route>
              <Route
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
            </Switch>

            <Footer />
          </Content>
        </AppContainer>
      )}
      {status === "error" && (
        <ErrorMessage title="ops!" icon={FaBug}>
          <p> {LOCALE[lang].error}</p>
          <Button
            icon={FaEnvelope}
            text="Email"
            href="mailto:oi@maria.dev"
          ></Button>
        </ErrorMessage>
      )}
    </ThemeProvider>
  );
}

export default App;
const ErrorMessage = styled(Card)`
  position: absolute;
  height: 200px;
  width: 60%;
  left: 20%;
  top: calc(50% - 100px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  > div {
    margin: 0;
  }
`;
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
  overflow-x: hidden;

  @media (max-width: 600px) {
    padding: 0;
    padding-left: 3rem;
  }
`;
