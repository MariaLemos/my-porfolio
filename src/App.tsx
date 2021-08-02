import styled, { ThemeProvider, keyframes } from "styled-components";
import Nav from "./components/nav";
import Services from "./components/services";
import About from "./components/about/about";
import Apresentation from "./components/apresentation";
import Contato from "./components/contato";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { getGitHubInfo, getGitHubProfile } from "./api/github";
import { Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Login from "./components/admin/login";
import { AppProvider } from "./AppProvider";

function App() {
  const [gitProfileInfo, setGitProfileInfo] = useState<OwnerData>({
    name: "",
    location: "",
    avatar_url: "",
    html_url: "",
    bio: "",
    email: "",
  });

  const theme = {
    purple: "#9b6ed0",
  };
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyle />
        <AppContainer>
          <Nav />
          <Content>
            <Route exact path="/" component={() => <Apresentation />} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={() => <About />} />
            <Route path="/projects" component={() => <Projects />} />
            <Route
              path="/contact"
              component={() => (
                <Contato
                  email={gitProfileInfo.email}
                  gitUrl={gitProfileInfo.html_url}
                />
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
  height: 100%;
  padding: 0 4rem;
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: 2rem;
  animation: ${anima} 2s;

  > section {
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    padding: 0;
    padding-left: 3rem;
  }
`;
