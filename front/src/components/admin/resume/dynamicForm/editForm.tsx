import { putResume } from "api/bff";
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
  removeHandler: () => void;
}> = ({ index, type, labels, fields, removeHandler }) => {
  const fieldsNames = Object.keys(fields).filter((name) => name !== "id");

  const { getValues, reset } = useFormContext<Resume>();

  const remove = async () => {
    await removeHandler();
    const data = getValues();
    await putResume(data);
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
