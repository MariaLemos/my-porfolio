import background from "./assets/bg2.jpg";
import styled from "styled-components";
import "./App.css";
import Nav from "./components/nav";
import Services from "./components/services";
import About from "./components/about/about";
import Apresentation from "./components/apresentation";
import Contato from "./components/contato";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { getGitHubInfo } from "./api/github";
import { Route } from "react-router-dom";
import { Owner, Project } from "./types";
function App() {
  const [gitProfileInfo, setGitProfileInfo] = useState<Owner>({
    name: "",
    location: "",
    avatar_url: "",
  });
  const [gitHabilitsInfo, setGitHabilitsInfo] = useState<string[]>([""]);
  const [gitProjectsInfo, setGitProjectsInfo] = useState<[]>([]);
  useEffect(() => {
    let response = async () => {
      const profileInfo = await getGitHubInfo();
      if (profileInfo[0].owner) {
        setGitProfileInfo(profileInfo[0].owner);
      }
      const response = profileInfo.map((project: Project) => project.language);
      setGitHabilitsInfo(
        response.filter(
          (elem: string, index: any, self: string) =>
            index === self.indexOf(elem) && elem !== null
        )
      );
      setGitProjectsInfo(profileInfo);
    };

    response();
  }, []);

  return (
    <AppContainer>
      <Nav />
      <Content>
        <Route exact path="/" component={Apresentation} />
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
        <Route path="/contact" component={Contato} />
        <Footer />
      </Content>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 4.5rem;
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: 2rem;
  background-color: #00000040;
  > section {
    width: 100%;
    padding: 0 15px;
    min-height: 90vh;
  }
`;
