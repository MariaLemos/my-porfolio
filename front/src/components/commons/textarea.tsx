import styled from "styled-components";
import { useController, UseControllerProps } from "react-hook-form";
const TextAreaComponent: React.FC<UseControllerProps & { label: string }> = (
  props
) => {
  const { field } = useController(props);

  return (
    <InputWrapper>
      <TextAreaStyled id="name" placeholder=" " {...field} />
      <span className="line" />
      <Label>{props.label}</Label>
    </InputWrapper>
  );
};
export default TextAreaComponent;

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
  top: -2rem;
  transition: 0.5s ease-in;
`;
const TextAreaStyled = styled.textarea`
  margin: 0;
  font-size: 1rem;
  width: 100%;
  border: none;
  min-height: 90px;
  resize: none;
  padding-left: 0.5rem;
  padding-top: 1.2rem;
  box-sizing: border-box;
  color: lightgrey;
  background-color: rgba(0, 0, 0, 0.7);
  & ~ ${Label} {
    top: -5.5rem;
  }
  &:focus-visible,
  &:not(:placeholder-shown) {
    outline: none;
    & ~ .line {
      width: 100%;
    }
    & ~ ${Label} {
      font-size: 0.8rem;
      top: -6.1rem;
    }
  }
`;
