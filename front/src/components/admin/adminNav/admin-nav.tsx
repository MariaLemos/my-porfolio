import styled from "styled-components";
import { FaGithub, FaUser, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import Button from "components/commons/button";
import { Link } from "react-router-dom";
import { updateGit } from "api/bff";

import { useAdminContext } from "../adminContext";
const AdminNav: React.FC = () => {
  const { setMessage: setShowMessage } = useAdminContext();
  return (
    <>
      <DashboardNav>
        <span>Atualizar</span>
        <Button
          icon={FaGithub}
          text={"Github"}
          onClickHandler={async () => {
            setShowMessage(await updateGit());
          }}
        />
        <Link to="/admin/config">
          <Button icon={FaUserCog} text={"Configuracoes"} />
        </Link>
        <Link to="/admin/resume">
          <Button icon={FaUser} text={"Curriculo"} />
        </Link>
        {/* <Link to="/admin/services">
          <Button icon={FaToolbox} text={"Serviços"} />
        </Link> */}
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
  justify-content: space-between;
  width: 100%;
  border: 1px dashed ${({ theme }) => theme.purple};
  padding: 1px;
  flex-wrap: wrap;
  padding: 1rem;
  > span {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
