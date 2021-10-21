import { updateUserInfo } from "api/bff";
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
  data?: TimeEvent;
  type: TypeTimeEvent;
}> = ({ data, type }) => {
  const { handleSubmit, control } = useForm({});
  const { resume } = useAppContext();
  const fields: Array<keyof Omit<Graduaction, "projects">> = [
    "title",
    "institution",
    "date",
  ];
  const labels = {
    graduaction: { title: "Curso", institution: "Instituicao", date: "Data" },
    workExperience: { title: "Cargo", institution: "Empresa", date: "Data" },
  };
  const { setMessage } = useAdminContext();
  const onSubmit = handleSubmit(async (newData: TimeEvent) => {
    console.log(data);
    const result = await updateUserInfo({
      resume: {
        ...resume,
        [type]: data
          ? (resume[type][resume[type].findIndex((item) => item === data)] =
              newData)
          : resume[type].push(newData),
      },
    });
    setMessage(result);
  });
  return (
    <Form onSubmit={onSubmit}>
      {fields.map((field) => {
        return (
          <InputComponent
            control={control}
            name={field}
            type="text"
            label={labels[type][field] as string}
            defaultValue={
              data ? data[field as keyof Omit<TimeEvent, "projects">] : ""
            }
          />
        );
      })}
      {type === "workExperience" && (
        <TextAreaComponent
          name="ativits"
          label={"principais atividades"}
          control={control}
        />
      )}
      <Button text={data ? "editar" : "ok"} icon={FaArrowCircleRight} />
    </Form>
  );
};
export default AddForm;
const Form = styled.form`
  width: 100%;
`;
