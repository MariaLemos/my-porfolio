import { useAppContext } from "AppContext";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import lang from "../../assets/lang.png";

export const LangToggle: React.FC = () => {
  const { lang, changeLang } = useAppContext();
  const [isChecked, setIsChecked] = useState(lang !== "pt-br");
  useEffect(() => {
    setTimeout(() => {
      changeLang(isChecked ? "en-us" : "pt-br");
    }, 1000);
    // eslint-disable-next-line
  }, [isChecked]);
  return (
    <Label>
      <HiddenInput
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />

      <Slider />
    </Label>
  );
};
const Label = styled.label`
  display: inline-block;
  width: 100px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.7);
  svg {
    width: 50px;
    height: auto;
    min-height: 30px;
    flex-shrink: 0;
    transition: 0.5s;
  }
`;
const Slider = styled.span`
  cursor: pointer;
  display: flex;
  background-color: aliceblue;
  -webkit-transition: 1s;
  width: 50px;
  transition: 1s;
  height: 35px;
  overflow: hidden;
  background: url(${lang});
  background-size: cover;
`;
const swap = keyframes`
0%{
  opacity:1;
  display:table;
}
100%{
  opacity:0;
  display: none;
}
`;

const HiddenInput = styled.input`
  opacity: 0;
  display: none;

  &:checked + span {
    -webkit-transform: translateX(50px);
    -ms-transform: translateX(50px);
    transform: translateX(50px);
    background-position: 50px;
  }
  &:checked + svg {
    &.pt {
      animation: ${swap} 0.5 forwards;
    }
    &.en {
      opacity: 1;
    }
  }
  &:not(:checked) + svg {
    &.en {
      animation: ${swap} 0.5 forwards;
    }
    &.pt {
      opacity: 1;
    }
  }
`;
