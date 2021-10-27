import Button from "components/commons/button";
import Card from "components/commons/card";
import { useFieldArray } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import EditForm from "./editForm";
type Labels = {
  graduaction: Omit<Graduaction, "projects"> & { projects: string };
  workExperience: Omit<Work, "projects"> & { projects: string };
  courses: Omit<Couses, "hours"> & { hours: string };
};
const DynamicFormComponent: React.FC<{
  type: keyof Resume;
}> = ({ type }) => {
  const { fields, append, remove } = useFieldArray({
    name: type, // unique name for your Field Array
    keyName: "id", //default to "id", you can change the key name
  });

  const labels: Labels = {
    graduaction: {
      title: "Curso",
      institution: "Instituicao",
      date: "Data",
      projects: "Projetos",
    },
    workExperience: {
      title: "Cargo",
      institution: "Empresa",
      date: "Data",
      ativits: "Atividades",
      projects: "Projetos",
    },
    courses: {
      instituicion: "Instituicao",
      hours: "horas",
      name: "nome",
    },
  };

  return (
    <FormsWrapper>
      {fields.map((field, index: number) => (
        <ResumeCard key={index}>
          <EditForm
            type={type}
            index={index}
            fields={field}
            labels={labels[type]}
            removeHandler={(i) => {
              remove(i);
            }}
          />
        </ResumeCard>
      ))}

      <AddButton
        icon={FaPlus}
        text={"Adicionar"}
        onClickHandler={() => {
          let keys: { [x: string]: string } = Object.keys(labels[type]).reduce(
            (prev, current) => {
              return current === "projects"
                ? { ...prev, [current]: [] }
                : { ...prev, [current]: "" };
            },
            {}
          );

          append(keys);
        }}
      />
    </FormsWrapper>
  );
};
export default DynamicFormComponent;
const FormsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem 0;
  border: 1px dashed ${({ theme }) => theme.purple};
  > div:not(:first-child) {
    flex: 1;
  }
`;
const ResumeCard = styled(Card)`
  max-width: 500px;
`;

const AddButton = styled(Button)`
  width: 100%;
`;
