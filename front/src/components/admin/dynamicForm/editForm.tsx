import { putUserInfo, updateResumeInfo } from "api/bff";
import { useBffResponse } from "AppContext";
import Button from "components/commons/button";
import TextAreaComponent from "components/commons/textarea";
import { FieldArrayWithId, UseFormReturn } from "react-hook-form";
import { FaArrowCircleRight, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { useAdminContext } from "../adminContext";

const EditForm: React.FC<{
  index: number;
  type: keyof Resume;
  formMethods: UseFormReturn<Resume>;
  fields: FieldArrayWithId<Resume, keyof Resume, "id">;
  labels: { [x: string]: string };
  removeHandler: () => void;
}> = ({ index, type, labels, fields, formMethods, removeHandler }) => {
  const fieldsNames = Object.keys(fields).slice(1);
  const oldData = useBffResponse();
  const { setMessage } = useAdminContext();

  const onSubmit = formMethods.handleSubmit(async (newData: Resume) => {
    const result = await updateResumeInfo(oldData.resume, newData);

    setMessage(result);
  });
  const remove = async () => {
    await removeHandler();
    const result = await putUserInfo({
      ...oldData,
      resume: formMethods.getValues(),
    });
    setMessage(result);
  };
  return (
    <Form onSubmit={onSubmit}>
      {fieldsNames.map((fieldName, i) => {
        const aux = fieldName as keyof FieldArrayWithId<
          Resume,
          keyof Resume,
          "id"
        >;

        return fieldName !== "ativits" ? (
          <InputWrapper key={i}>
            <InputStyled
              type={fieldName === "date" ? "date" : "text"}
              placeholder=" "
              // @ts-ignore
              {...formMethods.register(`${type}.${index}.${aux}` as const, {
                required: true,
              })}
              defaultValue={fields[aux]}
            />
            <span className="line" />
            <Label>{labels[fieldName]}</Label>
          </InputWrapper>
        ) : (
          <InputWrapper>
            <TextAreaStyled
              placeholder=" "
              // @ts-ignore
              {...formMethods.register(`${type}.${index}.ativits` as const, {
                required: true,
              })}
              // @ts-ignore
              defaultValue={fields.ativits}
            />
            <span className="line" />
            <Label>{labels.ativits}</Label>
          </InputWrapper>
        );
      })}

      <ButtonsWrapper>
        <Button text={"enviar"} icon={FaArrowCircleRight} />

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
  > button {
    flex: 1;
  }
`;
const InputWrapper = styled.label`
  width: 100%;
  .line {
    width: 0%;
    height: 2px;
    background-color: #9b6ed0;
    display: block;
    transition: 0.5s;
  }
`;
const Label = styled.span`
  position: relative;
  padding: 0.5rem;
  top: -2.2rem;
  transition: 0.5s ease-in;
`;
const InputStyled = styled.input`
  margin: 0;
  font-size: 1rem;
  height: 3rem;
  padding-left: 0.5rem;
  padding-top: 1rem;
  box-sizing: border-box;
  color: lightgrey;
  width: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  &:-internal-autofill-selected,
  &:-webkit-autofill {
    appearance: auto;
    background-color: rgba(0, 0, 0, 0.7) !important;
    color: lightgrey !important;
    -webkit-text-fill-color: #fff !important;
  }
  &:placeholder-shown {
    & ~ span.line {
      width: 0%;
    }
  }
  &:-internal-autofill-selected,
  &:-webkit-autofill,
  &:focus-visible,
  &:not(:placeholder-shown) {
    outline: none;
    & ~ span.line {
      width: 100%;
    }
    & ~ ${Label} {
      font-size: 0.8rem;
      top: -3rem;
    }
  }
`;
const TextAreaStyled = styled.textarea`
  margin: 0;
  font-size: 1rem;
  width: 100%;
  border: none;
  min-height: 90px;
  resize: none;
  padding-left: 0.5rem;
  padding-top: 1.2rem;
  box-sizing: border-box;
  color: lightgrey;
  background-color: rgba(0, 0, 0, 0.7);
  & ~ ${Label} {
    top: -5.5rem;
  }
  &:focus-visible,
  &:not(:placeholder-shown) {
    outline: none;
    & ~ .line {
      width: 100%;
    }
    & ~ ${Label} {
      font-size: 0.8rem;
      top: -6.1rem;
    }
  }
`;
