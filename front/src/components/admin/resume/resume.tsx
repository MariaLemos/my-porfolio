import { useBffResponse } from "AppContext";
import { FormProvider, useForm } from "react-hook-form";
import {
  FaAsterisk,
  FaGlobe,
  FaGraduationCap,
  FaSuitcase,
} from "react-icons/fa";
import styled from "styled-components";
import DynamicFormComponent from "./dynamicForm";
import SkillsFormComponent from "./dynamicForm/skillsForm";

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
        <DynamicFormComponent type="graduaction" icon={FaGraduationCap} />
        <DynamicFormComponent type="workExperience" icon={FaSuitcase} />
        <DynamicFormComponent type="languages" icon={FaGlobe} />
        <fieldset>
          <legend>
            <FaAsterisk />
            Skills
          </legend>
          <SkillsFormComponent type="softSkills" />
          <SkillsFormComponent type="hardSkills" />
        </fieldset>
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
