import { useAppContext, useBffResponse } from "AppContext";
import { FormProvider, useForm } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import styled from "styled-components";
import InputSwitch from "../resume/dynamicForm/inputWrapper";
import SkillsFormComponent from "./skillsForm";

const Skills: React.FC = () => {
  const { lang } = useAppContext();
  const appData = useBffResponse();
  const methods = useForm<Resume>({
    defaultValues: {
      ...appData.resumes[lang],
    },
  });
  return (
    <ResumeWrapper>
      <h1>Skills</h1>
      <FormProvider {...methods}>
        <fieldset>
          <InputSwitch fieldName={`subTitle`} label={"subtitulo"} />
          <InputSwitch fieldName={`bio`} label={"Resumo pessoal"} />
        </fieldset>

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
export default Skills;
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
