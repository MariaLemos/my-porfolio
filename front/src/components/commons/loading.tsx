import { useAppContext } from "AppContext";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import TyperWritter from "./typerWritter";

const Loading: React.FC = () => {
  const { profile, status } = useAppContext();
  const title = profile.name.split(" ");
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setDisplay(false);
      }, 1000);
    }
  }, [status]);

  return display ? (
    <Wrapper animationStart={status}>
      {status === "success" && (
        <Title>
          <TyperWritter text={`<${title[0]}/>`} />
        </Title>
      )}
    </Wrapper>
  ) : (
    <></>
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
  align-items: center;
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
        animation: ${FadeOut} 1s;
      `;
    }
  }}
`;
const Title = styled.h1`
  font-size: 70px;
  line-height: 0.8;
  font-weight: bold;
  margin-bottom: 5vh;
  @media (max-width: 400px) {
    margin-bottom: 5vh;
  }
`;
