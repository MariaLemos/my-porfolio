import { updateResumeInfo, putUserInfo } from "api/bff";
import { useAppContext } from "AppContext";
import Button from "components/commons/button";
import InputComponent from "components/commons/input";
import TextAreaComponent from "components/commons/textarea";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { useAdminContext } from "../adminContext";

type TypeTimeEvent = "workExperience" | "graduaction";

const EditForm: React.FC<{
  data: TimeEvent;
  index: number;
  type: TypeTimeEvent;
}> = ({ data, index, type }) => {
  const { handleSubmit, control } = useForm({});
  const { refreshData, resume, profile, projects } = useAppContext();
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
    resume[type][index] = newData;

    const result = await updateResumeInfo(resume, { [type]: resume[type] });
    setMessage(result);
    refreshData();
  });
  const remove = async () => {
    const result = await putUserInfo({
      profile,
      projects,
      resume: {
        ...resume,
        [type]: resume[type].filter((item) => item !== data),
      },
    });
    setMessage(result);
    refreshData();
  };

  return (
    <Form onSubmit={onSubmit}>
      {fields.map((field) => {
        return (
          <InputComponent
            control={control}
            name={field}
            type="text"
            label={labels[type][field] as string}
            defaultValue={data[field as keyof Omit<TimeEvent, "projects">]}
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
      <ButtonsWrapper>
        <Button text={"editar"} icon={FaArrowCircleRight} />

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
