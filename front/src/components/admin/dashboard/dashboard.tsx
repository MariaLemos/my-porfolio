import SectionTitle from "components/commons/sectionTitle";
import styled from "styled-components";
import { FaSlidersH } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <DashBoardWrapper>
      <SectionTitle icon={FaSlidersH} title="Dashboard" />
      <Iframe src="https://datastudio.google.com/embed/reporting/15377f1a-dfb3-4a12-98db-c8f7d8c72198/page/OYImC" />
    </DashBoardWrapper>
  );
};
export default Dashboard;
const DashBoardWrapper = styled.section``;
const Iframe = styled.iframe`
  width: 100%;
  max-width: 900px;

  height: 360px;
  border: 0;
  overflow: hidden;
`;
