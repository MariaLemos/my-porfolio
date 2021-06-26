import background from "./assets/banner.jpg";
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
import { Owner } from "./types";
function App() {
  const [gitInfo, setGitInfo] = useState<Owner>({
    name: "",
    location: "",
    avatar_url: "",
  });
  useEffect(() => {
    let response = async () => {
      const profileInfo = await getGitHubInfo();
      if (profileInfo[0].owner) {
        setGitInfo(profileInfo[0].owner);
      }
    };

    response();
  }, []);

  return (
    <AppContainer>
      <Nav />
      <Content>
        <Route exact path="/" component={Apresentation} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={() => <About owner={gitInfo} />} />
        <Route path="/projects" component={Projects} />
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
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  > section {
    width: 100%;
    padding: 0 15px;
  }
`;
