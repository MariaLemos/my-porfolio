import { updateResumeInfo } from "api/bff";
import { useAppContext } from "AppContext";
import Button from "components/commons/button";
import InputComponent from "components/commons/input";
import TextAreaComponent from "components/commons/textarea";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight } from "react-icons/fa";
import styled from "styled-components";
import { useAdminContext } from "../adminContext";

type TypeTimeEvent = "workExperience" | "graduaction";

const AddForm: React.FC<{
  type: TypeForm;
  labels: { [x: string]: string };
}> = ({ type, labels }) => {
  const { handleSubmit, control, reset } = useForm({});
  const { resume, refreshData } = useAppContext();
  const { setMessage } = useAdminContext();
  const fields = Object.keys(labels);

  const onSubmit = handleSubmit(async (newData: TimeEvent) => {
    // resume[type].push(newData);
    // const result = await updateResumeInfo(resume, { [type]: resume[type] });
    // setMessage(result);
    // refreshData();
    // reset();
  });

  return (
    <Form onSubmit={onSubmit}>
      {fields.map((field) => {
        return (
          <InputComponent
            control={control}
            name={field}
            type="text"
            label={labels[field] as string}
          />
        );
      })}
      {/* {type === "workExperience" && (
        <TextAreaComponent
          name="ativits"
          label={"principais atividades"}
          control={control}
        />
      )} */}
      <Button text={"adicionar"} icon={FaArrowCircleRight} />
    </Form>
  );
};
export default AddForm;
const Form = styled.form`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  > button {
    width: 100%;
  }
`;
