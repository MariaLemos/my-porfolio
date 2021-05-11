import React from "react";
import styled from "styled-components";
import SectionTitle from "./sectionTitle";
import { IconType } from "react-icons/lib";
const Card: React.FC<{
  title?: string;
  icon?: IconType;
  className?: string;
}> = ({ title, icon, children, className }) => {
  return (
    <CardWrapper className={className}>
      {title && <SectionTitle title={title} icon={icon} />}
      {children}
    </CardWrapper>
  );
};

export default Card;
const CardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
