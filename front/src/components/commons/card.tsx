import React, { useRef } from "react";
import styled, { css } from "styled-components";
import SectionTitle from "./sectionTitle";
import { IconType } from "react-icons/lib";
import useIntersection from "./useIntersection";
const Card: React.FC<{
  title?: string;
  icon?: IconType;
  className?: string;
}> = ({ title, icon, children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inViewport = useIntersection(ref);

  return (
    <CardWrapper className={className} animationStart={inViewport} ref={ref}>
      {title && <CardTitle title={title} icon={icon} />}
      {children}
    </CardWrapper>
  );
};

export default Card;
const CardWrapper = styled.div<{ animationStart: boolean }>`
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  padding: 1rem;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  &:nth-child(even) {
    transform: translateX(50px);
  }
  &:nth-child(odd) {
    transform: translateX(-50px);
  }
  &:nth-child(even),
  &:nth-child(odd) {
    opacity: 0;
    transition: all 1s;
    ${({ animationStart }) => {
      if (animationStart) {
        return css`
          opacity: 1;
          transform: translateX(0);
        `;
      }
    }}
  }
`;
const CardTitle = styled(SectionTitle)`
  margin-top: 0;
`;
