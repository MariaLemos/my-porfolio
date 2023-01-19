import React from "react";
import { FaCode } from "react-icons/fa";
import styled from "styled-components";
import { useAppContext } from "../../../AppContext";
import Card from "../../commons/card";
import SectionTitle from "../../commons/sectionTitle";
import ProjectImages from "./projectImages";
import LOCALE from "../../../config/locale.json";

const Projects: React.FC = () => {
  const isMobile = window.innerWidth < 700;
  const { projects, lang } = useAppContext();
  const locale = LOCALE[lang].projects;
  if (!projects) {
    return <></>;
  }

  return (
    <ProjectsWrapper id="projetos">
      <Title title={locale.title} icon={FaCode} />

      {projects.map((project, i) => {
        if (project.languages.length === 0) {
          return null;
        }
        const { name, homepage, html_url, description, languages } = project;
        return (
          <ProjectItem key={i}>
            {!isMobile && (
              <ProjectImages homepage={homepage} html_url={html_url} />
            )}
            <ProjectInfo>
              <a href={homepage ?? html_url}>
                <strong>{name}</strong>
              </a>
              <p>{description}</p>

              <TagsList>
                {languages &&
                  languages.map((lang) => <Tag key={lang}>{lang}</Tag>)}
              </TagsList>
            </ProjectInfo>
          </ProjectItem>
        );
      })}
    </ProjectsWrapper>
  );
};
const Title = styled(SectionTitle)`
  margin: 0;
`;
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
  gap: 1rem;
`;

const ProjectItem = styled(Card)`
  min-width: 550px;
  flex: 1;
  padding: 0;
  backdrop-filter: blur(1px);
  height: max-content;
  background-color: transparent;
  box-shadow: none;

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

export default Projects;
