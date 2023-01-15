import styled, { keyframes } from "styled-components";
import Nav from "./components/front/nav";
import About from "./components/front/about/about";
import Apresentation from "./components/front/apresentation";
import Contact from "./components/front/contact/contact";
import Projects from "./components/front/projects/projects";
import Footer from "./components/front/footer";
import { Route, Switch } from "react-router-dom";
import Admin from "./components/admin/admin";
import { useAppContext } from "AppContext";
import Loading from "components/commons/loading";
import { ErrorMessage } from "components/commons/errorMessage";
import Login from "components/admin/login/login";
import { MessageComponent } from "components/commons/message";

function App() {
  const { status, isLogged } = useAppContext();

  switch (status) {
    case "idle":
    case "loading":
      return <></>;
    case "error":
      return <ErrorCard />;
    case "success":
      return (
        <AppContainer>
          <Nav />
          <Content id="content">
            <Switch>
              <Route
                path="/admin"
                component={() =>
                  !isLogged ? (
                    <>
                      <MessageComponent />
                      <Login />
                    </>
                  ) : (
                    <>
                      <MessageComponent />

                      <Admin />
                    </>
                  )
                }
              />
              <Route
                path="/"
                component={() => (
                  <>
                    <Apresentation />
                    {/* <Services /> */}
                    <About />
                    <Projects /> <Contact />
                  </>
                )}
              />
            </Switch>

            <Footer />
          </Content>
        </AppContainer>
      );
  }
}

export default App;
const ErrorCard = styled(ErrorMessage)`
  position: absolute;
  height: 200px;
  width: 60%;
  left: 20%;
  top: calc(50% - 100px);
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
