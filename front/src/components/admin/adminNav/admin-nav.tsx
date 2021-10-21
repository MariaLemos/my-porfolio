import styled from "styled-components";
import { FaGithub, FaUser, FaToolbox, FaSignOutAlt } from "react-icons/fa";
import Button from "components/commons/button";
import { Link } from "react-router-dom";
import { updateGit } from "api/bff";

import { useAdminContext } from "../adminContext";
const AdminNav: React.FC = () => {
  const { setMessage: setShowMessage } = useAdminContext();
  return (
    <>
      <DashboardNav>
        <Button
          icon={FaGithub}
          text={"atualizar Github"}
          onClickHandler={async () => {
            setShowMessage(await updateGit());
          }}
        />
        <Link to="/admin/resume">
          <Button icon={FaUser} text={"atualizar Curriculo"} />
        </Link>
        <Link to="/admin/services">
          <Button icon={FaToolbox} text={"atualizar Serviços"} />
        </Link>
        <Button
          icon={FaSignOutAlt}
          text="sair"
          onClickHandler={() => {
            localStorage.clear();
            window.location.reload();
          }}
        ></Button>
      </DashboardNav>
    </>
  );
};
export default AdminNav;

const DashboardNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
