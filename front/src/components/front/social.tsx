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
          key !== "site" && (
            <SocialItem href={link} key={i}>
              {icon({})}
              <SocialText> {contact[key]}</SocialText>
            </SocialItem>
          )
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
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  gap: 0.5rem;
  line-height: 1;
  margin: 0.25rem 0;
  &:hover {
    transform: scale(1.2);
    color: ${(props) => props.theme.purple};
  }
  svg {
    margin: 0;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;
const SocialContainer = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-evenly;
  padding-left: 0.5rem;
  margin: 1rem auto;
  flex-wrap: wrap;
`;
