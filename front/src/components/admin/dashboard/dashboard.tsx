import SectionTitle from "components/commons/sectionTitle";
import styled from "styled-components";
import { FaGithub, FaSlidersH, FaUser, FaToolbox } from "react-icons/fa";
import Button from "components/commons/button";

const Dashboard: React.FC = () => {
  return (
    <DashBoardWrapper>
      <SectionTitle icon={FaSlidersH} title="Dashboard" />
      <DashboardNav>
        <Button icon={FaGithub} text={"atualizar Github"} />
        <Button icon={FaUser} text={"atualizar Curriculo"} />
        <Button icon={FaToolbox} text={"atualizar Serviços"} />
      </DashboardNav>
    </DashBoardWrapper>
  );
};
export default Dashboard;
const DashBoardWrapper = styled.section``;
const DashboardNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
