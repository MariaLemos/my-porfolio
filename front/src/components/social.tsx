import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useOwner } from "../AppContext";

const Social: React.FC = () => {
  const owner = useOwner();
  const socialNet = [
    { name: "facebook", link: "/", text: "/maria.lemos", icon: FaFacebook },
    { name: "linkedin", link: "/", text: "/maria.lemos", icon: FaLinkedin },
    {
      name: "github",
      link: owner.html_url,
      text: `/${owner.html_url.split("/")[3]}`,
      icon: FaGithub,
    },
    {
      name: "email",
      link: owner.email ?? "mailto:oi@marialemos.com",
      text: owner.email ?? "oi@marialemos.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <SocialContainer>
      {socialNet.map((net, i) => (
        <SocialItem href={net.link} key={i}>
          {net.icon({})}
          <SocialText> {net.text}</SocialText>
        </SocialItem>
      ))}
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
