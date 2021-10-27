import styled, { keyframes } from "styled-components";
import mockDevices from "assets/Artboard.png";
import celular from "assets/celular.png";
import notebook from "assets/pc.png";
import tablet from "assets/tablet.png";
import ProjectHoverContent from "./projectHoverContent";

const ProjectImages: React.FC<{ homepage: string; html_url: string }> = ({
  homepage,
  html_url,
}) => {
  const getUrlImages = (imageName: string) => {
    const projectUrl = html_url.split("/");
    return `https://raw.githubusercontent.com/${projectUrl[3]}/${projectUrl[4]}/main/${imageName}`;
  };
  return (
    <ProjectImagesWrapper className="project-holder">
      <ImagesDisplay>
        <DevicesImage src={mockDevices} alt="" />
        <NotebookImage src={getUrlImages("pc.png")} />
        <TabletImage src={getUrlImages("tablet.png")} />
        <PhoneImage src={getUrlImages("celular.png")} />
      </ImagesDisplay>
      <ProjectImagesHover className="project-content">
        <HoverContent homepage={homepage} gitUrl={html_url} />
      </ProjectImagesHover>
    </ProjectImagesWrapper>
  );
};
export default ProjectImages;

const ImagesDisplay = styled.figure`
  position: relative;
  width: 550px;
  height: 300px;
  margin: auto;
  z-index: 1;
  text-align: center;
  border-top-left-radius: 20px;
  display: flex;
`;
const NotebookImage = styled.img`
  height: 240px;
  position: relative;
  z-index: -3;
  right: 82%;
  top: 28px;
`;
const TabletImage = styled.img`
  width: 127px;
  position: relative;
  z-index: -2;
  top: 41%;
  right: 95.5%;
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
`;
const PhoneImage = styled.img`
  width: 60px;
  position: relative;
  z-index: -1;
  top: 71%;
  height: 100px;
  right: 127.5%;
`;
const DevicesImage = styled.img`
  width: auto;
  height: 109%;
  margin: auto;
  align-self: center;
`;
const animation = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
 
}
`;
const ProjectImagesWrapper = styled.div`
  display: block;
  position: relative;
  font-weight: 400;
  height: 300px;
  &:hover div {
    animation: ${animation} 1000ms;
    opacity: 1;
  }
`;
const ProjectImagesHover = styled.div`
  position: relative;
  width: 100%;
  height: 109%;
  top: -100%;
  left: 0px;
  opacity: 0;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  transition: animation 8s;
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 20px;
  padding: 1rem;
`;

const HoverContent = styled(ProjectHoverContent)`
  border: 1px solid #fff;
  font-size: 1.2rem;
  justify-content: space-evenly;
  height: 100%;
`;
