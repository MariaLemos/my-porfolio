import SectionTitle from "components/commons/sectionTitle";
import styled from "styled-components";
import { FaSlidersH } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <DashBoardWrapper>
      <SectionTitle icon={FaSlidersH} title="Dashboard" />
    </DashBoardWrapper>
  );
};
export default Dashboard;
const DashBoardWrapper = styled.section``;
