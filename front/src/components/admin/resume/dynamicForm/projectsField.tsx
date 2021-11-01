import Button from "components/commons/button";
import InputComponent from "components/commons/input";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FaPlus, FaTrash } from "react-icons/fa";
import styled from "styled-components";

const ProjectsFieldComponent: React.FC<{ fieldName: string }> = ({
  fieldName,
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: fieldName, // unique name for your Field Array
    keyName: "id", //default to "id", you can change the key name
  });

  return (
    <Projects>
      <TitleProjects>
        <strong>projetos</strong>
        <Button
          text=""
          icon={FaPlus}
          onClickHandler={() => append({ name: "", description: "" })}
        />
      </TitleProjects>
      {fields.map((field, index) => (
        <ProjectWrapper key={index}>
          <InputComponent
            name={`${fieldName}.${index}.name`}
            label={"nome"}
            control={control}
          />

          <InputComponent
            name={`${fieldName}.${index}.description`}
            label={"descricao"}
            control={control}
          />

          <Button text="" icon={FaTrash} onClickHandler={() => remove(index)} />
        </ProjectWrapper>
      ))}
    </Projects>
  );
};
export default ProjectsFieldComponent;
const ProjectWrapper = styled.div`
  background-color: ${({ theme }) => theme.grey};
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-areas: "input button" "input button";
  grid-template-columns: 1fr 5rem;
  grid-gap: 1rem;
  grid-template-rows: 3rem 3rem;
  grid-auto-flow: rows;
  margin: 1rem 0;
  > button {
    width: 100%;

    grid-column: 2/3;
  }
  > label {
    grid-column: 1/2;
  }
`;
const Projects = styled.div`
  width: 100%;
`;
const TitleProjects = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
