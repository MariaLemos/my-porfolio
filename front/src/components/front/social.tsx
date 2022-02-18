import React from "react";
import styled from "styled-components";

import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useOwner } from "../../AppContext";

type SocialMap = { [key in keyof Contact]: { link: string; icon: any } };

const Social: React.FC = () => {
  const { contact } = useOwner();
  const socialNet: SocialMap = {
    linkedin: {
      link: `https://www.linkedin.com/in/${contact.linkedin}`,
      icon: FaLinkedin,
    },
    github: {
      link: `https://github.com/${contact.github}`,
      icon: FaGithub,
    },
    email: {
      link: `mailto:${contact.email}`,
      icon: FaEnvelope,
    },
    whatsapp: {
      link: `https://api.whatsapp.com/send?phone=${contact.whatsapp}`,
      icon: FaWhatsapp,
    },
  };

  return (
    <SocialContainer>
      {Object.keys(contact).map((key, i) => {
        const { icon, link } = socialNet[key as keyof Contact] ?? {};
        return (
          <SocialItem href={link} key={i}>
            {icon({})}
            <SocialText> {contact[key as keyof Contact]}</SocialText>
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
