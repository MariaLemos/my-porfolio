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
  display: flex;
  justify-content: center;
  padding: 5vh 5rem;

  opacity: 0;
  transition: all 1s;
  position: fixed;
  z-index: 3;
  @media (max-width: 600px) {
    padding: 0;
    padding-left: 3rem;
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

  margin-top: calc(3.8vh + 170px);
  @media (max-width: 500px) {
    margin-top: calc(15vh + 170px);
  }
  @media (max-width: 350px) {
    font-size: 19vw;
    margin-top: calc(12vh + 170px);
  }
`;
