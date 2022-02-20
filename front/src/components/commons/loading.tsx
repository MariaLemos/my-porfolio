import { useAppContext } from "AppContext";
import styled, { css, keyframes } from "styled-components";
import TyperWritter from "./typerWritter";

const Loading: React.FC = () => {
  const { profile, status } = useAppContext();
  const title = profile.name.split(" ");

  return (
    <Wrapper animationStart={status}>
      {status === "success" && (
        <Title>
          <TyperWritter text={`<${title[0]}/>`} />
        </Title>
      )}
    </Wrapper>
  );
};
export default Loading;
const FadeOut = keyframes`
  0%{
    opacity: 1;
}
100%{
    opacity: 0;
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
    if (animationStart === "loading") {
      return css`
        opacity: 1;
      `;
    }
    if (animationStart === "success") {
      return css`
        animation: ${FadeOut} 1s forwards;
      `;
    }
  }}
`;
const Title = styled.h1`
  font-size: 70px;
  line-height: 0.8;
  font-weight: bold;

  margin-top: calc(8.5vh + 170px);
  @media (max-width: 500px) {
    margin-top: calc(20vh + 170px);
  }
`;
