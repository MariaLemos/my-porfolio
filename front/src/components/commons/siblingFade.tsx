import React from "react";
import styled from "styled-components";
const SiblingFade: React.FC<{
  className?: string;
}> = ({ children, className }) => {
  return (
    <SiblingFadeWrapper className={className}>{children}</SiblingFadeWrapper>
  );
};

export default SiblingFade;
const SiblingFadeWrapper = styled.div`
  visibility: hidden;
  display: flex;
  flex-wrap: wrap;

  > * {
    visibility: visible;
    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;
    flex: auto;
    margin: 0.3em;
  }

  &:hover > * {
    opacity: 0.4;
    transform: scale(0.9);
  }

  > *:hover {
    opacity: 1;
    transform: scale(1.1);
    transition-delay: 0ms, 0ms;
  }
`;
