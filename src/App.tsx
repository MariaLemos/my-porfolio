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

function App() {
  const [gitProfileInfo, setGitProfileInfo] = useState<Owner>({
    name: "",
    location: "",
    avatar_url: "",
    html_url: "",
    bio: "",
    email: "",
  });
  const [gitHabilitsInfo, setGitHabilitsInfo] = useState<string[]>([""]);
  const [gitProjectsInfo, setGitProjectsInfo] = useState<Project[]>([]);
  useEffect(() => {
    let response = async () => {
      const profileInfo = await getGitHubProfile();

      if (profileInfo) {
        setGitProfileInfo(profileInfo);
      }

      const repositoriesInfo = await getGitHubInfo();
      if (repositoriesInfo) {
        let allHabilits: string[] = [""];
        repositoriesInfo.forEach((repository) => {
          allHabilits = allHabilits.concat(repository.languages);
        });
        allHabilits = allHabilits.filter((item, pos) => {
          return allHabilits.indexOf(item) === pos && item !== "";
        });
        setGitHabilitsInfo(allHabilits);
      }

      setGitProjectsInfo(repositoriesInfo);
    };

    response();
  }, []);
  const theme = {
    purple: "#9b6ed0",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Nav />
        <Content>
          <Route
            exact
            path="/"
            component={() => (
              <Apresentation
                name={gitProfileInfo.name}
                gitUrl={gitProfileInfo.html_url}
                email={gitProfileInfo.email}
              />
            )}
          />
          <Route path="/services" component={Services} />
          <Route
            path="/about"
            component={() => (
              <About owner={gitProfileInfo} habilits={gitHabilitsInfo} />
            )}
          />
          <Route
            path="/projects"
            component={() => <Projects projects={gitProjectsInfo} />}
          />
          <Route
            path="/contact"
            component={() => (
              <Contato
                email={gitProfileInfo.email}
                gitUrl={gitProfileInfo.html_url}
              />
            )}
          />
          <Footer />
        </Content>
      </AppContainer>
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
