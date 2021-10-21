import { useAppContext } from "AppContext";
import Card from "components/commons/card";
import styled from "styled-components";
import TimeEventComponent from "./timeEvent";

const Resume: React.FC = () => {
  const { resume } = useAppContext();
  return (
    <ResumeTitle>
      <h1>RESUME</h1>
      <Form>
        <ResumeCard title="Graduacao">
          <TimeEventComponent
            dataArray={resume.graduaction}
            type="graduaction"
          />
        </ResumeCard>
        <ResumeCard title={"Trabalho"}>
          <TimeEventComponent
            dataArray={resume.workExperience}
            type="workExperience"
          />
        </ResumeCard>
      </Form>
    </ResumeTitle>
  );
};
export default Resume;
const ResumeTitle = styled.section``;
const Form = styled.div`
  width: 100%;
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const ResumeCard = styled(Card)`
  width: 100%;
`;
