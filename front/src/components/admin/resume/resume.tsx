import { useAppContext, useBffResponse } from "AppContext";
import InputComponent from "components/commons/input";
import { FormProvider, useForm } from "react-hook-form";
import {
  FaAsterisk,
  FaGlobe,
  FaGraduationCap,
  FaSuitcase,
} from "react-icons/fa";
import styled from "styled-components";
import DynamicFormComponent from "./dynamicForm";
import InputSwitch from "./dynamicForm/inputWrapper";
import SkillsFormComponent from "../skills/skillsForm";

const Resume: React.FC = () => {
  const { lang } = useAppContext();
  const appData = useBffResponse();
  const methods = useForm<Resume>({
    defaultValues: {
      ...appData.resumes[lang],
    },
  });
  return (
    <ResumeWrapper>
      <h1>RESUME</h1>
      <FormProvider {...methods}>
        <DynamicFormComponent type="graduaction" icon={FaGraduationCap} />
        <DynamicFormComponent type="workExperience" icon={FaSuitcase} />
        <DynamicFormComponent type="languages" icon={FaGlobe} />
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
