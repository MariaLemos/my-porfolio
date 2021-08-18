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
      {title && <CardTitle title={title} icon={icon} />}
      {children}
    </CardWrapper>
  );
};

export default Card;
const CardWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  padding: 1rem;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const CardTitle = styled(SectionTitle)`
  margin-top: 0;
`;
