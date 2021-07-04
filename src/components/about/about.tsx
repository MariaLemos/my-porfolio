import React from "react";
import {
  FaAsterisk,
  FaClock,
  FaCertificate,
  FaGraduationCap,
  FaSuitcase,
  FaUser,
} from "react-icons/fa";
import Timeline from "./timeline";
import styled from "styled-components";
import SectionTitle from "../commons/sectionTitle";
import Resume from "./components/resume";
import Card from "../commons/card";
import { Owner } from "../../types";
import SiblingFade from "../commons/siblingFade";
const About: React.FC<{ owner: Owner; habilits: string[] }> = ({
  owner,
  habilits,
}) => {
  const graduaction = [
    {
      title: "Analise e desenvolvimento de sistemas",
      institution: "Infnet",
      date: "2021 a 2023",
    },
    {
      title: "Analise e desenvolvimento de sistemas",
      institution: "Infnet",
      date: "2021 a 2023",
    },
  ];
  const curses = [
    { name: "adadadadad", instituicion: "asdadada", hours: 12 },
    { name: "JavaScript", instituicion: "Alura", hours: 24 },
  ];
  const workExperience = [
    {
      title: "",
      institution: "",
      date: "",
      projects: [{ name: "", description: "" }],
    },
  ];

  return (
    <>
      <AboutWrapper id="about">
        <GridTitle title={"Sobre Mim"} icon={FaUser} />
        <Resume owner={owner} />

        <Habilits title={"Habilidades"} icon={FaAsterisk}>
          <ul>
            <SiblingFade>
              {habilits.map((habilit) => (
                <HabilitTag>{habilit}</HabilitTag>
              ))}
            </SiblingFade>
          </ul>
        </Habilits>
        <Formations>
          <Card title={"Formação"} icon={FaGraduationCap}>
            <Timeline events={graduaction} />
          </Card>
        </Formations>
        <Courses>
          <SectionTitle title={"Cursos"} icon={FaCertificate} />
          <SiblingFade>
            {curses.map((curse, index) => {
              return (
                <Card title={curse.name} icon={FaCertificate} key={index}>
                  <FaClock />
                  {curse.hours} hrs - {curse.instituicion}
                </Card>
              );
            })}
          </SiblingFade>
        </Courses>

        <WorkXP title={"Experiência"} icon={FaSuitcase}>
          <Timeline events={workExperience} />
        </WorkXP>
      </AboutWrapper>
    </>
  );
};
const GridTitle = styled(SectionTitle)`
  grid-area: title;
  padding-top: 1rem;
`;
const Courses = styled.section`
  grid-area: courses;
`;
const Formations = styled.section`
  grid-area: formations;
`;
const HabilitTag = styled.li`
  background-color: ${(props) => props.theme.purple};
  list-style: none;
  padding: 0.5rem 1rem;
  clip-path: polygon(90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%, 10% 0%);
  text-align: center;
  cursor: default;
`;
const AboutWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  grid-template-areas:
    "title title title title"
    "about about about habilits"
    "formations formations experiences experiences"
    "courses courses experiences experiences";

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "about"
      "habilits"
      "experiences"
      "formations"
      "courses";
  }
`;
const WorkXP = styled(Card)`
  grid-area: experiences;
`;
const Habilits = styled(Card)`
  grid-area: habilits;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    gap: 0.5rem;
  }
`;
export default About;
