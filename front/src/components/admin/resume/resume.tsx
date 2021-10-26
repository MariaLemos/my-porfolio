import { useBffResponse } from "AppContext";
import SectionTitle from "components/commons/sectionTitle";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";

import styled from "styled-components";
import DynamicFormComponent from "./dynamicForm";

const Resume: React.FC = () => {
  const appData = useBffResponse();
  return (
    <ResumeWrapper>
      <h1>RESUME</h1>

      <Form>
        <SectionTitle icon={FaGraduationCap} title={"Formacao"} />
        <DynamicFormComponent type="graduaction" appData={appData.resume} />
      </Form>
      <Form>
        <SectionTitle icon={FaSuitcase} title={"Experiencia profissional"} />
        <DynamicFormComponent type="workExperience" appData={appData.resume} />
      </Form>
      <Form>
        <SectionTitle icon={FaSuitcase} title={"Cursos"} />
        <DynamicFormComponent type="courses" appData={appData.resume} />
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
