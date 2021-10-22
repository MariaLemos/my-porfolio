import { useAppContext } from "AppContext";

import styled from "styled-components";
import TimeEventComponent from "./timeEvent";

const Resume: React.FC = () => {
  const { resume } = useAppContext();
  return (
    <ResumeWrapper>
      <h1>RESUME</h1>
      <Form>
        <TimeEventComponent dataArray={resume.graduaction} type="graduaction" />

        <TimeEventComponent
          dataArray={resume.workExperience}
          type="workExperience"
        />
      </Form>
    </ResumeWrapper>
  );
};
export default Resume;
const ResumeWrapper = styled.section`
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
const Form = styled.div``;
