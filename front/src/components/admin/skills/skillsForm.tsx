import Button from "components/commons/button";
import Card from "components/commons/card";
import { useFieldArray } from "react-hook-form";
import { FaPlus, FaSave, FaTrash } from "react-icons/fa";
import styled from "styled-components/macro";
import { ResumeForm } from "../resume/formResumeWrapper";
import InputSwitch from "../resume/dynamicForm/inputWrapper";

const SkillsFormComponent: React.FC<{
  type: "softSkills" | "hardSkills";
}> = ({ type }) => {
  const { fields, append, remove } = useFieldArray({
    name: type, // unique name for your Field Array
    keyName: "id", //default to "id", you can change the key name
  });

  return (
    <ResumeCard>
      <ResumeForm>
        {fields.map((field, index: number) => {
          return (
            <InputWrapper key={index}>
              <InputSwitch
                key={index}
                fieldName={`${type}.${index}.name`}
                label={type}
              />
              <RemoveButton
                text={""}
                icon={FaTrash}
                onClickHandler={(e) => {
                  e.preventDefault();
                  remove(index);
                }}
              />
            </InputWrapper>
          );
        })}

        <ButtonsWrapper>
          <AddButton
            icon={FaPlus}
            text={"Adicionar"}
            onClickHandler={(evt) => {
              evt.preventDefault();

              append({ name: "" });
            }}
          />
          {fields.length > 0 && <Button text={"salvar"} icon={FaSave} />}
        </ButtonsWrapper>
      </ResumeForm>
    </ResumeCard>
  );
};
export default SkillsFormComponent;
const InputWrapper = styled.div`
  display: flex;
`;
const ResumeCard = styled(Card)`
  flex: 1;
  min-width: 300px;
  @media (max-width: 400px) {
    min-width: 200px;
  }
`;

const AddButton = styled(Button)``;
const RemoveButton = styled(Button)`
  height: 3.2rem;
  position: relative;
  left: -1rem;
  > svg {
    margin-right: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
  > button {
    flex: 1;
  }
`;
