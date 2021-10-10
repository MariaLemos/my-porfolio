import styled from "styled-components";
import { FaGithub, FaUser, FaToolbox } from "react-icons/fa";
import Button from "components/commons/button";
import { Link } from "react-router-dom";
const AdminNav: React.FC = () => {
  return (
    <DashboardNav>
      <Button icon={FaGithub} text={"atualizar Github"} />
      <Link to="/admin/resume">
        <Button icon={FaUser} text={"atualizar Curriculo"} />
      </Link>
      <Link to="/admin/services">
        <Button icon={FaToolbox} text={"atualizar Serviços"} />
      </Link>
    </DashboardNav>
  );
};
export default AdminNav;

const DashboardNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
