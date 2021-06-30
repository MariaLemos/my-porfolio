import React from "react";
import {
  FaCode,
  FaLaptop,
  FaMobile,
  FaBriefcase,
  FaDesktop,
} from "react-icons/fa";
import styled from "styled-components";
import { Project } from "../types";
import Card from "./commons/card";
import SectionTitle from "./commons/sectionTitle";
import mockDevices from "../assets/responsivo.png";

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  console.log(projects);
  return (
    <ProjectsWrapper id="projetos">
      <SectionTitle title={"Projetos"} icon={FaCode} />
      {projects.map((project) => {
        return (
          <ProjectItem>
            <ProjectImages className="project-holder">
              <ImagesDisplay>
                <img src={mockDevices} className="notebook" alt="" />
              </ImagesDisplay>
              <ProjectImagesHover className="project-content">
                <HoverContent>
                  <a href="">
                    <FaBriefcase /> Visite
                  </a>
                  <a href={project.url}>
                    <FaCode />
                    Ver codigo
                  </a>
                </HoverContent>
              </ProjectImagesHover>
            </ProjectImages>

            <ProjectInfo>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              <TagsList>
                <Tag>{project.language}</Tag>
              </TagsList>
            </ProjectInfo>
          </ProjectItem>
        );
      })}
    </ProjectsWrapper>
  );
};

const ImagesDisplay = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #434343;
  text-align: center;
  border-top-left-radius: 20px;
  display: flex;
  img {
    width: auto;
    height: 90%;
    margin: auto;
    align-self: center;
  }
`;
const Tag = styled.li`
  background-color: rgb(130, 81, 167);
  border-radius: 5%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  font-size: 0.7em;
  line-height: 1.5;
  list-style-position: inside;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%);
  width: fit-content;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;
  ::marker {
    color: black;
  }
`;
const TagsList = styled.ul`
  padding: 0;
  margin: 1rem 0;
`;
const HoverContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;

  border: 1px solid #fff;
  box-sizing: border-box;
  align-self: center;
  width: 100%;
  margin: auto;
  transition: all 800ms ease-in-out;
  a:hover {
    text-decoration: underline;
  }
`;
const ProjectImagesHover = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: -100%;
  left: 0px;
  opacity: 0;
  display: none;
  z-index: 10;
  align-items: center;
  justify-content: center;
  transition: all 800ms ease-in-out;
  background-color: #00000060;
  border-top-left-radius: 20px;
  padding: 1rem;

  &:hover {
    opacity: 1;
    display: flex;
  }
`;
const ProjectImages = styled.div`
  display: block;
  position: relative;
  font-weight: 400;
  height: 180px;
  transition: all 800ms ease-in-out;
  border-color: #fff;
  &:hover div {
    opacity: 1;
    display: flex;
  }
`;
const ProjectInfo = styled.figcaption`
  padding: 1rem;
  p {
    margin-top: 0.5rem;
  }
`;
const LaptopDisplay = styled.div``;
const MobileDisplay = styled.div``;
const ProjectsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;

const ProjectItem = styled(Card)`
  min-width: 48%;
  flex: 1;
  padding: 0;
`;
export default Projects;
