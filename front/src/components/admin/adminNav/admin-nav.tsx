import styled from "styled-components";
import { FaGithub, FaUser, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import Button from "components/commons/button";
import { Link } from "react-router-dom";
import { updateGit } from "api/bff";

import { useAdminContext } from "../adminContext";
import { useAppContext } from "AppContext";
const AdminNav: React.FC = () => {
  const { setMessage: setShowMessage } = useAdminContext();
  const { refreshData } = useAppContext();
  return (
    <>
      <DashboardNav>
        <span>Atualizar</span>
        <Button
          icon={FaGithub}
          text={"Github"}
          onClickHandler={async () => {
            setShowMessage(await updateGit());
            refreshData();
          }}
        />

        <Link to="/admin/resume">
          <Button icon={FaUser} text={"Curriculo"} />
        </Link>
        {/* <Link to="/admin/services">
          <Button icon={FaToolbox} text={"Serviços"} />
        </Link> */}
        <Link to="/admin/profile">
          <Button icon={FaUserCog} text={"Perfil"} />
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
  border: 1px dashed ${({ theme }) => theme.purple};
  padding: 1px;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  > a,
  > a button,
  > button {
    flex: 1;
    width: 100%;
  }
  > span {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
