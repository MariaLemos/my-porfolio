import styled from "styled-components";
import { useController, UseControllerProps } from "react-hook-form";
import { InputHTMLAttributes } from "react";

const InputComponent: React.FC<
  UseControllerProps & InputHTMLAttributes<HTMLInputElement> & { label: string }
> = (props) => {
  const { field } = useController(props);

  return (
    <InputWrapper>
      <InputStyled type={props.type} id="name" placeholder=" " {...field} />
      <span className="line" />
      <Label>{props.label}</Label>{" "}
    </InputWrapper>
  );
};
export default InputComponent;

const InputWrapper = styled.label`
  width: 100%;
  .line {
    width: 0;
    height: 2px;
    background-color: #9b6ed0;
    display: block;
    transition: 0.5s;
  }
`;
const Label = styled.span`
  position: relative;
  padding: 0.5rem;
  top: -2.2rem;
  transition: 0.5s ease-in;
`;
const InputStyled = styled.input`
  margin: 0;
  font-size: 1rem;
  height: 3rem;
  padding-left: 0.5rem;
  padding-top: 1rem;
  box-sizing: border-box;
  color: lightgrey;
  width: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  &:-internal-autofill-selected,
  &:-webkit-autofill {
    appearance: auto;
    background-color: rgba(0, 0, 0, 0.7) !important;
    color: lightgrey !important;
    -webkit-text-fill-color: #fff !important;
  }
  &:focus-visible,
  &:not(:placeholder-shown) {
    outline: none;
    & ~ .line {
      width: 100%;
    }
    & ~ ${Label} {
      font-size: 0.8rem;
      top: -3rem;
    }
  }
`;
