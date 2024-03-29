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
import LOCALE from "../../../config/locale.json";

const About: React.FC = () => {
  const { lang, resumes } = useAppContext();
  const locale = LOCALE[lang].about;
  const { graduaction, courses, workExperience, hardSkills } = resumes[lang];
  return (
    <AboutWrapper id="sobre">
      <SectionTitle title={locale.title} icon={FaUser} />
      <ResumeWrapper>
        <Resume />

        <Habilits title={locale.habilit} icon={FaAsterisk}>
          <ul>
            <SiblingFade>
              {hardSkills.map((habilit, i) => (
                <HabilitTag key={i}>{habilit.name}</HabilitTag>
              ))}
              {/* {softSkills.map((habilit, i) => (
                <HabilitTag key={i}>{habilit.name}</HabilitTag>
              ))} */}
            </SiblingFade>
          </ul>
        </Habilits>
        <Formations title={locale.graduaction} icon={FaGraduationCap}>
          <Timeline events={graduaction} />
        </Formations>

        <WorkXP title={locale.workExperience} icon={FaSuitcase}>
          <Timeline events={workExperience} />
        </WorkXP>
        <Courses>
          <SectionTitle title={locale.courses} icon={FaCertificate} />
          <SiblingFade>
            {courses.map((curse, index) => {
              return (
                <Card title={curse.name} icon={FaCertificate} key={index}>
                  <p>
                    {curse.instituicion}{" "}
                    {curse.hours && (
                      <span>
                        <FaClock /> {curse.hours}
                      </span>
                    )}
                  </p>
                </Card>
              );
            })}
          </SiblingFade>
        </Courses>
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
  font-size: 0.8rem;
  min-width: 50px;
  max-width: 150px;
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
    "courses courses courses courses";

  @media (max-width: 900px) {
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
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    span {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
    }
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
    > div {
      justify-content: center;
    }
  }
`;
export default About;
