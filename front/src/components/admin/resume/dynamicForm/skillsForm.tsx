import { updateResumeInfo, putUserInfo } from "api/bff";
import { useBffResponse } from "AppContext";
import { useAdminContext } from "components/admin/adminContext";
import Button from "components/commons/button";
import Card from "components/commons/card";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FaPlus, FaSave, FaTrash } from "react-icons/fa";
import styled from "styled-components/macro";
import InputSwitch from "./inputWrapper";

const SkillsFormComponent: React.FC<{
  type: "softSkills" | "hardSkills";
}> = ({ type }) => {
  const {
    fields,
    append,
    remove: removeHandler,
  } = useFieldArray({
    name: type, // unique name for your Field Array
    keyName: "id", //default to "id", you can change the key name
  });

  const oldData = useBffResponse();
  const { setMessage } = useAdminContext();
  const { handleSubmit, getValues } = useFormContext();

  const onSubmit = handleSubmit(async (newData: Resume) => {
    const result = await updateResumeInfo(oldData.resume, newData);

    setMessage(result);
  });
  const remove = async (index: number) => {
    await removeHandler(index);

    const result = await putUserInfo({
      ...oldData,
      resume: getValues() as Resume,
    });
    setMessage(result);
  };
  return (
    <ResumeCard>
      <Form onSubmit={onSubmit}>
        {fields.map((field, index: number) => (
          <InputWrapper>
            <InputSwitch
              key={index}
              fieldName={`${type}.${index}`}
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
        ))}

        <ButtonsWrapper>
          <AddButton
            icon={FaPlus}
            text={"Adicionar"}
            onClickHandler={() => {
              let keys: { [x: string]: string } = Object.keys(type).reduce(
                (prev, current) => {
                  return { ...prev, [current]: "" };
                },
                {}
              );

              append(keys);
            }}
          />
          <Button text={"salvar"} icon={FaSave} />
        </ButtonsWrapper>
      </Form>
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
`;

const AddButton = styled(Button)``;
const RemoveButton = styled(Button)`
  height: 3.2rem;
`;
const Form = styled.form``;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
  > button {
    flex: 1;
  }
`;
