import { putResume } from "api/bff";
import { useAppContext } from "AppContext";
import Button from "components/commons/button";
import { useFormContext } from "react-hook-form";
import { FaSave, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { ResumeForm } from "../formResumeWrapper";
import InputSwitch from "./inputWrapper";

const EditForm: React.FC<{
  index: number;
  type: keyof Resume;
  fields: Record<"id", string>;
  labels: { [x: string]: string };
  removeHandler: (i: number) => void;
}> = ({ index, type, labels, fields, removeHandler }) => {
  const fieldsNames = Object.keys(fields).filter((name) => name !== "id");

  const { setMessage } = useAppContext();
  const { getValues, reset } = useFormContext();

  const remove = async () => {
    const oldData = getValues() as Resume;
    await removeHandler(index);
    const data = getValues() as Resume;

    const result = await putResume(data);
    setMessage(result);
    if (result.type === "error") {
      reset(oldData);
    }
  };
  return (
    <Form key={index}>
      {fieldsNames.map((fieldName, i) => (
        <InputSwitch
          key={i}
          fieldName={`${type}.${index}.${fieldName}`}
          label={labels[fieldName]}
        />
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
const Form = styled(ResumeForm)`
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
