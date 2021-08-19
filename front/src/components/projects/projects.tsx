import React from "react";
import { FaCode } from "react-icons/fa";
import styled from "styled-components";
import { useAppContext } from "../../AppContext";
import Card from "../commons/card";
import SectionTitle from "../commons/sectionTitle";
import ProjectHoverContent from "./projectHoverContent";
import ProjectImages from "./projectImages";

const Projects: React.FC = () => {
  const isMobile = window.innerWidth < 600;
  const { projects } = useAppContext();
  return (
    <ProjectsWrapper id="projetos">
      <SectionTitle title={"Projetos"} icon={FaCode} />

      {projects.map((project, i) => {
        if (project.languages.length === 0) {
          return <></>;
        }
        return (
          <ProjectItem key={i}>
            {!isMobile && (
              <ProjectImages
                homepage={project.homepage}
                html_url={project.html_url}
              />
            )}
            <ProjectInfo>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              {isMobile && (
                <ProjectHoverContent
                  homepage={project.homepage}
                  gitUrl={project.html_url}
                />
              )}
              <TagsList>
                {project.languages &&
                  project.languages.map((lang) => <Tag key={lang}>{lang}</Tag>)}
              </TagsList>
            </ProjectInfo>
          </ProjectItem>
        );
      })}
    </ProjectsWrapper>
  );
};

const TagsList = styled.ul`
  padding: 0;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  gap: 1rem;
`;
const Tag = styled.li`
  background-color: ${(props) => props.theme.purple};
  border-radius: 5%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  font-size: 0.7em;
  line-height: 1.5;
  list-style-position: inside;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%);
  width: fit-content;
  text-align: center;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  ::marker {
    color: black;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const ProjectInfo = styled.figcaption`
  padding: 1rem;
  padding-top: 1.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  border-top-left-radius: 20px;
  min-height: 125px;

  p {
    margin-top: 0.5rem;
  }
`;
const ProjectsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;
`;

const ProjectItem = styled(Card)`
  min-width: 550px;
  flex: 1;
  padding: 0;
  backdrop-filter: blur(1px);
  height: max-content;
  background-color: transparent;
  box-shadow: none;
  overflow: hidden;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

export default Projects;
