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

function App() {
  return (
    <AppContainer>
      <Nav />
      <Content>
        <Apresentation />
        <Services />
        <About />
        <Projects />
        <Contato />
        <Footer />
      </Content>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-image: url(${background});
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: calc(100% - 50px);
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  > section {
    width: 100%;
    padding: 0 15px;
  }
`;
