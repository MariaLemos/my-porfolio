import { putUserInfo, updateResumeInfo } from "api/bff";
import { useBffResponse } from "AppContext";
import Button from "components/commons/button";
import { useFormContext } from "react-hook-form";
import { FaSave, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { useAdminContext } from "../../adminContext";
import InputSwitch from "./inputWrapper";

const EditForm: React.FC<{
  index: number;
  type: keyof Resume;
  fields: Record<"id", string>;
  labels: { [x: string]: string };
  removeHandler: (i: number) => void;
}> = ({ index, type, labels, fields, removeHandler }) => {
  const fieldsNames = Object.keys(fields).filter((name) => name !== "id");
  const oldData = useBffResponse();
  const { setMessage } = useAdminContext();
  const { handleSubmit, getValues } = useFormContext();

  const onSubmit = handleSubmit(async (newData: Resume) => {
    const result = await updateResumeInfo(oldData.resume, newData);

    setMessage(result);
  });
  const remove = async () => {
    await removeHandler(index);

    const result = await putUserInfo({
      ...oldData,
      resume: getValues() as Resume,
    });
    setMessage(result);
  };
  return (
    <Form onSubmit={onSubmit} key={index}>
      {fieldsNames.map((fieldName, i) => (
        <InputSwitch
          key={i}
          fieldName={`${type}.${index}.${fieldName}`}
          label={labels[fieldName]}
        ></InputSwitch>
      ))}

      <ButtonsWrapper>
        <Button text={"salvar"} icon={FaSave} />

        <Button
          text={"remover"}
          icon={FaTrash}
          onClickHandler={(e) => {
            e.preventDefault();
            remove();
          }}
        />
      </ButtonsWrapper>
    </Form>
  );
};
export default EditForm;
const Form = styled.form`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
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
