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

function About() {
  const habilits = [{ name: "" }];
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
    { name: "", instituicion: "", hours: 12 },
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
    <AboutWrapper id="about">
      <SectionTitle title={"Sobre Mim"} icon={FaUser} />

      <Resume />

      <Habilits title={"Habilidades"} icon={FaAsterisk}>
        {habilits.map((habilit) => habilit.name)}
      </Habilits>
      <div className="studiesGroup">
        <Card title={"Formação"} icon={FaGraduationCap}>
          <Timeline events={graduaction} />
        </Card>
        <div className="cursos">
          <SectionTitle title={"Cursos"} icon={FaCertificate}>
            <div className="sibling-fade">
              {curses.map((curse, index) => {
                return (
                  <Card title={curse.name} icon={FaCertificate} key={index}>
                    <h4>{curse.name}</h4>
                    <FaClock />
                    {curse.hours} hrs
                    {curse.instituicion}
                  </Card>
                );
              })}
            </div>
          </SectionTitle>
        </div>
      </div>
      <WorkXP title={"Experiência"} icon={FaSuitcase}>
        <Timeline events={workExperience} />
      </WorkXP>
    </AboutWrapper>
  );
}
const AboutWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  .studiesGroup {
    width: 49%;
  }
`;
const WorkXP = styled(Card)`
  width: 49%;
`;
const Habilits = styled(Card)`
  width: 39%;
`;
export default About;
