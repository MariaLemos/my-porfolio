import { useBffResponse } from "AppContext";
import SectionTitle from "components/commons/sectionTitle";
import { FormProvider, useForm } from "react-hook-form";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";

import styled from "styled-components";
import DynamicFormComponent from "./dynamicForm";

const Resume: React.FC = () => {
  const appData = useBffResponse();
  const methods = useForm<Resume>({
    defaultValues: {
      ...appData.resume,
    },
  });
  return (
    <ResumeWrapper>
      <h1>RESUME</h1>
      <FormProvider {...methods}>
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
      </FormProvider>
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
