import { useAppContext } from "AppContext";
import Button from "components/commons/button";
import { FormProvider, useForm } from "react-hook-form";
import { FaAsterisk, FaSave } from "react-icons/fa";
import styled from "styled-components";
import { ResumeForm } from "../resume/formResumeWrapper";
import InputSwitch from "../resume/dynamicForm/inputWrapper";
import SkillsFormComponent from "./skillsForm";
import { LangToggle } from "components/commons/langToggle";
import { useEffect } from "react";

const Skills: React.FC = () => {
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
      <h1>Skills</h1>
      <LangToggle />
      <FormProvider {...methods}>
        <ResumeForm>
          <fieldset>
            <InputSwitch fieldName={`subTitles`} label={"subtitulo"} />
            <InputSwitch fieldName={"bio"} label={"Resumo pessoal"} />
            <Button text={"salvar"} icon={FaSave} />
          </fieldset>
        </ResumeForm>
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
