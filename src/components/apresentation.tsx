import React from "react";
import { FaEnvelope, FaArrowAltCircleDown } from "react-icons/fa";
import Social from "./social";
import styled from "styled-components";
import Button from "./commons/button";
import GirlTyping from "./commons/girltyping.js";
import TyperWritter from "./commons/typerWritter";
import { useOwner } from "../AppContext";

const Apresentation: React.FC = () => {
  const owner = useOwner();
  const title = owner.name.split(" ");
  return (
    <ApresentationWrapper id="inicio">
      <GirlTyping />
      <div>
        <Title>
          <TyperWritter text={`<${title[0]}/>`} />
        </Title>

        <Subtitle>
          <TyperWritter text={"Desenvolvedora júnior"} />
        </Subtitle>
      </div>
      <ButtonWrapper>
        <Button text="Baixar Curriculo" icon={FaArrowAltCircleDown} />

        <Button text={"Entre em contato"} icon={FaEnvelope} href="/#contact" />
      </ButtonWrapper>
      <Social />
      {/* <span id="mouse"></span>{" "} */}
    </ApresentationWrapper>
  );
};
const ApresentationWrapper = styled.section`
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
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
  font-size: 3.5rem;
  line-height: 0.8;

  font-weight: bold;
`;
const Subtitle = styled.h2`
  margin-top: 1rem;
  font-weight: normal;
`;
export default Apresentation;
