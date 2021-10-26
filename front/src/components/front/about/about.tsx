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
import SectionTitle from "../../commons/sectionTitle";
import Resume from "./components/resume";
import Card from "../../commons/card";
import SiblingFade from "../../commons/siblingFade";
import { useAppContext } from "../../../AppContext";
const About: React.FC = () => {
  const { profile, habilits, resume } = useAppContext();

  return (
    <AboutWrapper id="sobre">
      <SectionTitle title={"Sobre Mim"} icon={FaUser} />
      <ResumeWrapper>
        <Resume owner={profile} />

        <Habilits title={"Habilidades"} icon={FaAsterisk}>
          <ul>
            <SiblingFade>
              {habilits.map((habilit) => (
                <HabilitTag>{habilit}</HabilitTag>
              ))}
            </SiblingFade>
          </ul>
        </Habilits>
        <Formations title={"Formação"} icon={FaGraduationCap}>
          <Timeline events={resume.graduaction} />
        </Formations>
        <Courses>
          <SectionTitle title={"Cursos"} icon={FaCertificate} />
          <SiblingFade>
            {resume.courses.map((curse, index) => {
              return (
                <Card title={curse.name} icon={FaCertificate} key={index}>
                  <p>
                    {curse.instituicion} <FaClock /> {curse.hours} hrs
                  </p>
                </Card>
              );
            })}
          </SiblingFade>
        </Courses>

        <WorkXP title={"Experiência"} icon={FaSuitcase}>
          <Timeline events={resume.workExperience} />
        </WorkXP>
      </ResumeWrapper>
    </AboutWrapper>
  );
};

const HabilitTag = styled.li`
  background-color: ${(props) => props.theme.purple};
  list-style: none;
  padding: 0.5rem 1rem;
  clip-path: polygon(90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%, 10% 0%);
  text-align: center;
  cursor: default;
`;
const AboutWrapper = styled.section``;
const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
  grid-template-areas:
    "about about about habilits"
    "formations formations experiences experiences"
    "courses courses experiences experiences";

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "title"
      "about"
      "habilits"
      "experiences"
      "formations"
      "courses";
  }
`;
const Courses = styled.div`
  grid-area: courses;
  div div h2 {
    font-size: 1rem;
  }
  p {
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
    svg {
      width: 0.8rem;
      margin: 0 0.5rem;
    }
  }
`;
const Formations = styled(Card)`
  grid-area: formations;
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
