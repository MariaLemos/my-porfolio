import { useBffResponse } from "AppContext";
import Button from "components/commons/button";
import Card from "components/commons/card";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import EditForm from "./editForm";
type Labels = {
  graduaction: Graduaction;
  workExperience: Work;
  courses: Omit<Couses, "hours"> & { hours: string };
};
const DynamicFormComponent: React.FC<{
  type: keyof Resume;
}> = ({ type }) => {
  const appData = useBffResponse();

  const formMethods = useForm<Resume>({
    defaultValues: {
      ...appData.resume,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: formMethods.control, // control props comes from useForm (optional: if you are using FormContext)
    name: type, // unique name for your Field Array
    keyName: "id", //default to "id", you can change the key name
  });

  const labels: Labels = {
    graduaction: {
      title: "Curso",
      institution: "Instituicao",
      date: "Data",
    },
    workExperience: {
      title: "Cargo",
      institution: "Empresa",
      date: "Data",
      ativits: "Atividades",
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
            formMethods={formMethods}
            removeHandler={() => {
              remove(index);
            }}
          />
        </ResumeCard>
      ))}

      <AddButton
        icon={FaPlus}
        text={"Adicionar"}
        onClickHandler={() => {
          let keys: { [x: string]: string } = Object.keys(labels[type]).reduce(
            (prev, current) => ({ ...prev, [current]: "" }),
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
  width: 45%;
  min-width: 300px;
`;

const AddButton = styled(Button)`
  width: 100%;
`;
