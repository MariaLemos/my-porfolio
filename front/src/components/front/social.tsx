import React from "react";
import styled from "styled-components";
import { useOwner } from "../../AppContext";
import { socialNet } from "components/commons/socialMap";

const Social: React.FC = () => {
  const { contact } = useOwner();
  const networkNames = Object.keys(contact) as Array<keyof Contact>;
  return (
    <SocialContainer>
      {networkNames.map((key, i) => {
        const { icon, link } = socialNet(key, contact[key]);
        return (
          <SocialItem href={link} key={i}>
            {icon({})}
            <SocialText> {contact[key]}</SocialText>
          </SocialItem>
        );
      })}
    </SocialContainer>
  );
};
export default Social;
const SocialText = styled.span`
  font-size: 0.8rem;
  @media (max-width: 500px) {
    display: none;
  }
`;
const SocialItem = styled.a`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-color: #00000071;
  border-radius: 15px;
  gap: 0.5rem;
  line-height: 1;
  &:hover {
    transform: scale(1.2);
    color: ${(props) => props.theme.purple};
  }
  svg {
    margin: 0;
  }
`;
const SocialContainer = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: space-evenly;

  margin: 1rem auto;
  flex-wrap: wrap;
`;
