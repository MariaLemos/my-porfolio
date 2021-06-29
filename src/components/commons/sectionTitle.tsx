import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons/lib";
const SectionTitle: React.FC<{
  title: string;
  icon?: IconType;
  className?: string;
}> = ({ title, icon, className }) => {
  return (
    <TitleWrapper className={className}>
      {icon && icon({})}
      <h2>{title}</h2>
    </TitleWrapper>
  );
};

export default SectionTitle;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin: 1rem 0;
`;
