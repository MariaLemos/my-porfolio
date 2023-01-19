import { useAppContext } from "AppContext";
import styled, { css, keyframes } from "styled-components";
import TyperWritter from "./typerWritter";

const Loading: React.FC = () => {
  const { status } = useAppContext();
  const title = "Maria";

  return (
    <Wrapper animationStart={status}>
      <Title>
        <TyperWritter text={`<${title}/>`} />
      </Title>
    </Wrapper>
  );
};
export default Loading;
const FadeOut = keyframes`
  0%{
    opacity: 1;
}99%{
  opacity: 0;
}
100%{
   
    display:none; 
    z-index:-1;
  }
`;
const Wrapper = styled.div<{
  animationStart: "idle" | "success" | "error" | "loading";
}>`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.blackTransparent};
  display: grid;
  place-items: center;
  gap: 2vh;
  padding: 3vh;
  opacity: 0;
  transition: all 1s;
  position: fixed;
  z-index: 3;
  grid-template-rows: 30vh 10vh 8vh 12vh 14vh 10vh;
  grid-template-areas: "girl" "title" "subtitle" "butons" "social" "mouse";

  @media (max-width: 600px) {
    grid-template-rows: 30vh 10vh 8vh 17vh 14vh 5vh;
    padding: 0.5rem 1rem;
    padding-left: 4rem;
  }
  ${({ animationStart }) => {
    if (animationStart !== "success") {
      return css`
        opacity: 1;
      `;
    }
    if (animationStart === "success") {
      return css`
        animation: ${FadeOut} 2s forwards;
      `;
    }
  }}
`;
const Title = styled.h1`
  font-size: 70px;
  line-height: 0.8;
  font-weight: bold;
  grid-area: title;

  @media (max-width: 350px) {
    font-size: 19vw;
  }
`;
