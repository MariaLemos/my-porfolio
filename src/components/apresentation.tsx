import React from "react";
import { FaEnvelope, FaArrowAltCircleDown } from "react-icons/fa";
import Social from "./social";
import styled from "styled-components";
import Button from "./commons/button";
import GirlTyping from "./commons/girltyping.js";
import TyperWritter from "./commons/typerWritter";
function Apresentation() {
  return (
    <ApresentationWrapper id="inicio">
      <GirlTyping />
      <div>
        <Title>
          <TyperWritter text="&lt;Maria/&gt;" />
        </Title>

        <h2 className="subtitulo">
          <TyperWritter text={"Desenvolvedora júnior"} />
        </h2>
      </div>
      <ButtonWrapper>
        <Button text="Baixar Curriculo" icon={FaArrowAltCircleDown} />

        <Button text={"Entre em contato"} icon={FaEnvelope} href="/#contato" />
      </ButtonWrapper>
      <Social />
      {/* <span id="mouse"></span>{" "} */}
    </ApresentationWrapper>
  );
}
const ApresentationWrapper = styled.section`
  height: 90vh;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 5.4rem;
  line-height: 0.8;
  padding-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
  /* Animation */
`;
export default Apresentation;
