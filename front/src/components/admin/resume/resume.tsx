import { useAppContext } from "AppContext";
import { LangToggle } from "components/commons/langToggle";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  FaCertificate,
  FaGlobe,
  FaGraduationCap,
  FaSuitcase,
} from "react-icons/fa";
import styled from "styled-components";
import DynamicFormComponent from "./dynamicForm";

const Resume: React.FC = () => {
  const { lang, resumes } = useAppContext();

  const methods = useForm<Resume>({
    defaultValues: {
      ...resumes[lang],
    },
  });
  useEffect(() => {
    methods.reset(resumes[lang]);
    // eslint-disable-next-line
  }, [lang, resumes]);
  return (
    <ResumeWrapper>
      <h1>RESUME</h1>
      <LangToggle />
      <FormProvider {...methods}>
        <DynamicFormComponent type="graduaction" icon={FaGraduationCap} />
        <DynamicFormComponent type="workExperience" icon={FaSuitcase} />
        <DynamicFormComponent type="languages" icon={FaGlobe} />
        <DynamicFormComponent type="courses" icon={FaCertificate} />
      </FormProvider>
    </ResumeWrapper>
  );
};
export default Resume;
const ResumeWrapper = styled.section`
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  fieldset {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
