import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  FaAddressCard,
  FaUser,
  FaCode,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";
const Nav = () => {
  return (
    <NavContainer>
      <NavItem to="/" exact activeClassName="selected">
        <FaAddressCard />
      </NavItem>
      <NavItem to="/services" activeClassName="selected">
        <FaBriefcase />
      </NavItem>
      <NavItem to="/about" exact activeClassName="selected">
        <FaUser />
      </NavItem>
      <NavItem to="/projects" exact activeClassName="selected">
        <FaCode />
      </NavItem>
      <NavItem strict to="/contact" activeClassName="selected">
        <FaEnvelope />
      </NavItem>
    </NavContainer>
  );
};
export default Nav;

const NavContainer = styled.nav`
  width: 60px;
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
`;
const NavItem = styled(NavLink)`
  padding: 0.5rem;
  &:hover,
  &.selected {
    color: #9844b7;
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
