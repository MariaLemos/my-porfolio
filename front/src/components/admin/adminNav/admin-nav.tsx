import styled from "styled-components";
import {
  FaGithub,
  FaUser,
  FaSignOutAlt,
  FaUserCog,
  FaSlidersH,
} from "react-icons/fa";
import Button from "components/commons/button";
import { Link } from "react-router-dom";
import { updateGit } from "api/bff";
import { useAppContext } from "AppContext";
const AdminNav: React.FC = () => {
  const { refreshData, setMessage } = useAppContext();
  return (
    <DashboardNav>
      <Link to="/admin">
        <Button icon={FaSlidersH} text={"Dashboard"} />
      </Link>
      <Button
        icon={FaGithub}
        text={"Github"}
        onClickHandler={async () => {
          setMessage(await updateGit());
          refreshData();
        }}
      />

      <Link to="/admin/resume">
        <Button icon={FaUser} text={"Curriculo"} />
      </Link>
      <Link to="/admin/skills">
        <Button icon={FaUserCog} text={"Sobre"} />
      </Link>
      {/* <Link to="/admin/services">
          <Button icon={FaToolbox} text={"Serviços"} />
        </Link> */}
      <Link to="/admin/contact">
        <Button icon={FaUserCog} text={"Contato"} />
      </Link>
      <Link to="/">
        <Button
          icon={FaSignOutAlt}
          text="sair"
          onClickHandler={() => {
            localStorage.clear();
            window.location.reload();
          }}
        />
      </Link>
    </DashboardNav>
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
  & + section {
    padding-top: 0;
  }
`;
