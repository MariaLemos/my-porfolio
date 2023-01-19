import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { HoverContent } from "./hoverContent";

const ProjectImages: React.FC<{ homepage: string; html_url: string }> = ({
  homepage,
  html_url,
}) => {
  const [imageError, setImageError] = useState(false);
  const getUrlImages = (imageName: string) => {
    const projectUrl = html_url.split("/");
    return `https://raw.githubusercontent.com/${projectUrl[3]}/${projectUrl[4]}/main/${imageName}`;
  };
  const pcImg = getUrlImages("pc.png");
  const tabletImg = getUrlImages("tablet.png");
  const celImg = getUrlImages("celular.png");

  return !imageError ? (
    <ProjectImagesWrapper className="project-holder">
      <ImagesDisplay>
        <NotebookImage>
          <img src={pcImg} onError={() => setImageError(true)} alt="" />
          <Tela homepage={homepage} gitUrl={html_url} />
        </NotebookImage>

        <TabletImage>
          <img src={tabletImg} onError={() => setImageError(true)} alt="" />
          <Tela homepage={homepage} gitUrl={html_url} />
        </TabletImage>

        <PhoneImage>
          <img src={celImg} onError={() => setImageError(true)} alt="" />
          <Tela homepage={homepage} gitUrl={html_url} />
        </PhoneImage>
      </ImagesDisplay>
    </ProjectImagesWrapper>
  ) : (
    <></>
  );
};
export default ProjectImages;
const Tela = styled(HoverContent)``;
const animation = keyframes`
0%{
  opacity:0;
  width:100%;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
100%{
  opacity:1;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%);
  
}
`;
const DeviceImage = styled.div`
  border-radius: 5%;
  border-color: #fff;
  border-style: solid;
  position: relative;
  background-color: #fff;
  transition: 0.5s;

  img {
    width: 100%;
    height: auto;
  }
  ${Tela} {
    position: absolute;
    top: -0%;
  }
  &:hover ${Tela} {
    animation: ${animation} 1000ms forwards;
    opacity: 1;
  }
  &:hover {
    transform: scale(1.2);
  }
`;
const NotebookImage = styled(DeviceImage)`
  height: 230px;
  border-width: 10px;
  width: 360px;
  &:hover {
    transform: scale(1.1);
  }
  &:after {
    position: relative;
    content: " ";
    background-color: #d1d1d1;
    height: 20px;
    width: 400px;
    border-top: 2px solid #fff;
    border-bottom-left-radius: 80%;
    border-bottom-right-radius: 80%;
    display: block;
    left: -30px;
  }
`;

const TabletImage = styled(DeviceImage)`
  width: 120px;
  height: 175px;
  border-width: 10px 4px 10px 4px;
`;
const PhoneImage = styled(DeviceImage)`
  width: 66px;
  height: 125px;
  border-width: 10px 4px 10px 4px;
  ${Tela} {
    a > span {
      display: none;
    }
  }
`;

const ProjectImagesWrapper = styled.div`
  display: block;
  position: relative;
  font-weight: 400;
  height: 300px;

  @media (max-width: 600px) {
    display: none;
  }
`;
const ImagesDisplay = styled.figure`
  width: 100%;
  height: 300px;
  margin: auto;
  z-index: 1;
  text-align: center;
  border-top-left-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;
