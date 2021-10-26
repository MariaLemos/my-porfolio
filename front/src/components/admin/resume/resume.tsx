import SectionTitle from "components/commons/sectionTitle";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";

import styled from "styled-components";
import DynamicFormComponent from "./dynamicForm/dynamicForm";

const Resume: React.FC = () => {
  return (
    <ResumeWrapper>
      <h1>RESUME</h1>
      <Form>
        <SectionTitle icon={FaGraduationCap} title={"Formacao"} />

        <DynamicFormComponent type="graduaction" />
      </Form>
      <Form>
        <SectionTitle icon={FaSuitcase} title={"Experiencia profissional"} />

        <DynamicFormComponent type="workExperience" />
      </Form>
      <Form>
        <SectionTitle icon={FaSuitcase} title={"Cursos"} />

        <DynamicFormComponent type="courses" />
      </Form>
    </ResumeWrapper>
  );
};
export default Resume;
const ResumeWrapper = styled.section`
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
const Form = styled.div``;
