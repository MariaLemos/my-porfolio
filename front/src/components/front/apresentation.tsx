import { FaEnvelope, FaArrowAltCircleDown } from "react-icons/fa";
import Social from "./social";
import styled from "styled-components";
import Button from "../commons/button";
import GirlTyping from "../commons/girltyping.js";
import TyperWritter from "../commons/typerWritter";
import { useAppContext } from "../../AppContext";
import LOCALE from "../../config/locale.json";
import generatePDFDocument from "./resumepdf/generatePdf";

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

  return (
    <ApresentationWrapper id="home">
      <GirlTyping />

      <Title>{`<${title[0]}/>`}</Title>

      {subTitles && (
        <SubTitles>
          {subTitles.map((title, i) => {
            return <TyperWritter key={i} text={title} />;
          })}
        </SubTitles>
      )}

      <ButtonWrapper>
        <Button
          text={LOCALE[lang].apresentation.download}
          icon={FaArrowAltCircleDown}
          onClickHandler={() => generatePDFDocument(context)}
        />

        <Button
          text={LOCALE[lang].apresentation.contact}
          icon={FaEnvelope}
          href="/#contato"
        />
      </ButtonWrapper>
      <SocialWrapper />
      <Mouse />
    </ApresentationWrapper>
  );
};

const ApresentationWrapper = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;
  gap: 2vh;
  grid-template-rows: 30vh 10vh 8vh 12vh 14vh 10vh;
  grid-template-areas: "girl" "title" "subtitle" "butons" "social" "mouse";
  @media (max-width: 600px) {
    grid-template-rows: 30vh 10vh 8vh 17vh 14vh 5vh;
  }
`;
const SocialWrapper = styled(Social)`
  grid-area: social;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  grid-area: butons;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  line-height: 0.8;
  grid-area: title;
  font-weight: bold;
  @media (max-width: 350px) {
    font-size: 19vw;
  }
`;
const SubTitles = styled.h2`
  grid-area: subtitle;
  font-weight: normal;
  text-align: center;
  align-self: start;
`;
const Mouse = styled.div`
  display: block;
  width: 26px;
  height: 40px;
  border-radius: 20px;
  border: 4px solid #fff;
  text-align: center;
  grid-area: mouse;
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
