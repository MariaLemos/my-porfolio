import React from "react";
import { FaBriefcase } from "react-icons/fa";
import styled from "styled-components";
import Card from "./commons/card";

const Projects: React.FC = () => {
	return (
		<ProjectsWrapper id="projetos">
			<Card title={"projetos"} icon={FaBriefcase} />
		</ProjectsWrapper>
	);
};

const ProjectsWrapper = styled.section``;
export default Projects;
