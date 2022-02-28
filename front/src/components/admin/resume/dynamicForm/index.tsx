import Button from "components/commons/button";
import Card from "components/commons/card";
import { useFieldArray } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import styled from "styled-components/macro";
import EditForm from "./editForm";
import LOCALE from "config/locale.json";
type Labels = {
  graduaction: Omit<TimeEvent, "projects"> & { projects: string };
  workExperience: Omit<TimeEvent, "projects"> & { projects: string };
  courses: Omit<Courses, "hours"> & { hours: string };
  languages: Language;
};
const DynamicFormComponent: React.FC<{
  type: keyof Omit<
    Resume,
    "softSkills" | "hardSkills" | "bio" | "subTitle" | "lang"
  >;
  icon: IconType;
}> = ({ type, icon }) => {
  const { fields, append, remove } = useFieldArray({
    name: type, // unique name for your Field Array
    keyName: "id", //default to "id", you can change the key name
  });

  const labels: Labels = LOCALE["pt-br"].admin.resume;

  return (
    <FormsWrapper>
      <legend>
        {icon({})}
        {LOCALE["pt-br"].about[type]}
      </legend>
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
const FormsWrapper = styled.fieldset`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 1rem;
`;
const ResumeCard = styled(Card)`
  min-width: 300px;
  flex: 1;
`;

const AddButton = styled(Button)`
  width: 100%;
`;
