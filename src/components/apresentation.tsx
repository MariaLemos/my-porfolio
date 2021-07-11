import React from "react";
import { FaEnvelope, FaArrowAltCircleDown } from "react-icons/fa";
import Social from "./social";
import styled from "styled-components";
import Button from "./commons/button";
import GirlTyping from "./commons/girltyping.js";
import TyperWritter from "./commons/typerWritter";

const Apresentation: React.FC<{ name: string; gitUrl: string; email: string }> =
  ({ name, gitUrl, email }) => {
    const title = name.split(" ");
    return (
      <ApresentationWrapper id="inicio">
        <GirlTyping />
        <div>
          <Title>
            <TyperWritter text={`<${title[0]}/>`} />
          </Title>

          <h3 className="subtitulo">
            <TyperWritter text={"Desenvolvedora júnior"} />
          </h3>
        </div>
        <ButtonWrapper>
          <Button text="Baixar Curriculo" icon={FaArrowAltCircleDown} />

          <Button
            text={"Entre em contato"}
            icon={FaEnvelope}
            href="/#contact"
          />
        </ButtonWrapper>
        <Social gitUrl={gitUrl} email={email} />
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
  h2 {
    margin-top: 1rem;
  }
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
    font-size: 3.5rem;
  }
`;
export default Apresentation;
