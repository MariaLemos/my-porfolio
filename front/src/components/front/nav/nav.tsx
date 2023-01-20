import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import {
  FaAddressCard,
  FaUser,
  FaCode,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import { useAppContext } from "AppContext";
import { ReactComponent as Brasil } from "../../assets/pt-br.svg";
import { ReactComponent as USA } from "../../assets/en-us.svg";
import LOCALE from "../../../config/locale.json";

const Nav: React.FC = () => {
  const { lang, changeLang } = useAppContext();
  const loggedIn = Boolean(localStorage.getItem("access-token"));
  const locale = LOCALE[lang].nav;

  return (
    <NavContainer
      items={["home", "sobre", "projetos", "contato"]}
      currentClassName="selected"
      componentTag="nav"
      offset={-100}
    >
      <NavItem to="/#home" smooth aria-label={locale.home}>
        <FaAddressCard />
      </NavItem>
      {/* <NavItem to="/#servicos" smooth>
        <FaBriefcase />
      </NavItem> */}
      <NavItem to="/#sobre" smooth aria-label={locale.sobre}>
        <FaUser />
      </NavItem>
      <NavItem to="/#projetos" smooth aria-label={locale.projetos}>
        <FaCode />
      </NavItem>
      <NavItem to="/#contato" smooth aria-label={locale.contato}>
        <FaEnvelope />
      </NavItem>
      <Flag onClick={() => changeLang(lang !== "pt-br" ? "pt-br" : "en-us")}>
        {lang === "pt-br" ? <USA /> : <Brasil />}
      </Flag>
      {loggedIn && (
        <NavItem to="/admin" aria-label={"admin"}>
          <FaCog />
        </NavItem>
      )}
    </NavContainer>
  );
};
export default Nav;

const NavContainer = styled(Scrollspy)`
  width: 3.5rem;
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  background: rgba(34, 34, 34, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem 0;
`;
const NavItem = styled(NavHashLink)`
  padding: 0.5rem;
  transition: 0.5s;
  > svg {
    margin: 0;
  }
  &:hover,
  &.selected {
    color: ${(props) => props.theme.purple};
    transform: scale(1.5);

    /*    &::before {
      content: "<";
      margin: 0 5px;
      animation: tagear2 1s;
      display: inline-table;
    }
    &::after {
      content: ">";
      margin: 0 5px;
      animation: tagear 1s;
      display: inline-table;
    }*/
  }
`;
const Flag = styled.div`
  width: 1.5rem;
  height: 1rem;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  > svg {
    height: 1rem;
    width: auto;
    margin: 0;
  }
  &:hover {
    color: ${(props) => props.theme.purple};
    transform: scale(1.5);
  }
`;
