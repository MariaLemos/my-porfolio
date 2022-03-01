import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons/lib";

const Button: React.FC<{
  text: string;
  icon: IconType;
  href?: string;
  className?: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ className, text, icon, href, onClickHandler = () => null }) => {
  return (
    <CustomButton
      className={className}
      onClick={(e) => (href ? window.location.assign(href) : onClickHandler(e))}
    >
      {icon && icon({})}
      <span>{text}</span>
    </CustomButton>
  );
};

export default Button;
const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-appearance: none;
  outline: 0;
  background: linear-gradient(45deg, #576fe6, #9844b7, purple);
  font-size: 1rem;
  /* background-image: linear-gradient(to right, purple, #764ba2, rgb(120, 102, 129), #8E37D7); */
  padding: 0.7rem 1rem;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.7);
  cursor: pointer;
  border: none;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  min-width: fit-content;
  background-size: 150% 100%;
  color: #fff;
  min-width: 4rem;
  transition: all 0.4s ease-in-out;
  svg {
    flex-shrink: 0;
  }
  &:nth-child(2) {
    border-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
