import React from "react";
import { FaEnvelope, FaArrowAltCircleDown } from "react-icons/fa";
import Social from "./social";
import styled from "styled-components";
import Button from "../commons/button";
import GirlTyping from "../commons/girltyping.js";
import TyperWritter from "../commons/typerWritter";
import { useAppContext } from "../../AppContext";
import LOCALE from "../../config/locale.json";
import { createResume } from "./resumeToPrint/createResume";
import { ResumetoPrint } from "./resumeToPrint/resumeToPrint";

const Apresentation: React.FC = () => {
  const context = useAppContext();
  const {
    lang,
    profile,
    resumes: {
      [lang]: { subTitles },
    },
  } = context;
  const title = profile.name.split(" ");
  const ref = React.createRef<HTMLDivElement>();
  return (
    <>
      <ApresentationWrapper id="home">
        <GirlTyping />
        <div>
          <Title>
            <TyperWritter text={`<${title[0]}/>`} />
          </Title>

          {subTitles && (
            <SubTitles>
              {subTitles.map((title, i) => {
                return <TyperWritter key={i} text={title} />;
              })}
            </SubTitles>
          )}
        </div>
        <ButtonWrapper>
          <Button
            text={LOCALE[lang].apresentation.download}
            icon={FaArrowAltCircleDown}
            onClickHandler={() => {
              createResume(ref.current);
            }}
          />

          <Button
            text={LOCALE[lang].apresentation.contact}
            icon={FaEnvelope}
            href="/#contato"
          />
        </ButtonWrapper>
        <Social />
        <Mouse />
      </ApresentationWrapper>
      <ResumetoPrint fref={ref} />
    </>
  );
};

const ApresentationWrapper = styled.section`
  height: 100vh;
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
  font-size: 70px;
  line-height: 0.8;
  font-weight: bold;
`;
const SubTitles = styled.h2`
  margin-top: 1rem;
  font-weight: normal;
`;
const Mouse = styled.div`
  display: block;
  width: 26px;
  height: 40px;
  border-radius: 20px;
  border: 4px solid #fff;
  text-align: center;

  margin: 0 auto;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 8px;
    position: relative;
    border-radius: 4px;
    background: #fff;
    animation-name: mouse;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
  }

  @keyframes mouse {
    from {
      top: 0px;
    }

    to {
      top: 6px;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
export default Apresentation;
