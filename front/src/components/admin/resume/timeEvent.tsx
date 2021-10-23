import Button from "components/commons/button";
import Card from "components/commons/card";
import SectionTitle from "components/commons/sectionTitle";
import { useState } from "react";
import { FaGraduationCap, FaPen, FaPlus, FaSuitcase } from "react-icons/fa";
import styled, { css } from "styled-components";
import AddForm from "./addForm";
import EditForm from "./editForm";

const TimeEventComponent: React.FC<{
  dataArray: TimeEvent[];
  type: "workExperience" | "graduaction";
}> = ({ dataArray, type }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <FormsWrapper>
      {type === "graduaction" ? (
        <SectionTitle icon={FaGraduationCap} title={"Formacao"} />
      ) : (
        <SectionTitle icon={FaSuitcase} title={"Experiencia profissional"} />
      )}
      {dataArray.map((item: Graduaction | Work, index) => (
        <ResumeCard key={index}>
          {<EditForm data={item} type={type} index={index} />}
        </ResumeCard>
      ))}

      {showForm ? (
        <ResumeCard>
          <AddForm type={type} />
        </ResumeCard>
      ) : (
        <AddButton
          icon={FaPlus}
          text={"Adicionar"}
          onClickHandler={() => setShowForm(true)}
        />
      )}
    </FormsWrapper>
  );
};
export default TimeEventComponent;
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
