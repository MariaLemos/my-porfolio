import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons/lib";

const Button: React.FC<{ text: string; icon: IconType; href?: string }> = ({
  text,
  icon,
  href,
}) => {
  return (
    <CustomButton>
      {href ? (
        <a href={href}>
          {icon && icon({})}
          <span>{text}</span>
        </a>
      ) : (
        <>
          {icon && icon({})}
          <span>{text}</span>
        </>
      )}
    </CustomButton>
  );
};

export default Button;
const CustomButton = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  -webkit-appearance: none;
  outline: 0;
  background: linear-gradient(45deg, #576fe6, #9844b7, purple);
  /* background-image: linear-gradient(to right, purple, #764ba2, rgb(120, 102, 129), #8E37D7); */
  padding: 1rem;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.7);
  cursor: pointer;

  text-align: center;
  border: none;
  background-size: 150% 100%;
  color: #fff;
  border-radius: 10px;
  width: 180px;

  transition: all 0.4s ease-in-out;
  svg {
    margin-right: 0.5rem;
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
`;
