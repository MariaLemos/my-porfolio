import { useAppContext, useOwner } from "AppContext";
import styled, { css, keyframes } from "styled-components";
import TyperWritter from "./typerWritter";

const Loading: React.FC = () => {
  const { profile, status } = useAppContext();
  const title = profile.name.split(" ");
  return (
    <Wrapper animationStart={status}>
      {status === "success" && (
        <h1>
          <TyperWritter text={`<${title[0]}/>`} />
        </h1>
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
  align-items: center;
  opacity: 0;
  transition: all 1s;
  position: absolute;
  z-index: 3;
  > h1 {
    font-size: 70px;
    line-height: 0.8;
    font-weight: bold;
    transform: translateY(-66px);
  }
  ${({ animationStart }) => {
    if (animationStart === "loading") {
      return css`
        opacity: 1;
      `;
    }
    if (animationStart === "success") {
      return css`
        animation: ${FadeOut} 1s;
      `;
    }
  }}
`;
