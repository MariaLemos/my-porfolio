import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Social: React.FC<{ gitUrl: string; email: string }> = ({
  gitUrl,
  email,
}) => {
  const socialNet = [
    { name: "facebook", link: "/", text: "/maria.lemos", icon: FaFacebook },
    { name: "linkedin", link: "/", text: "/maria.lemos", icon: FaLinkedin },
    {
      name: "github",
      link: gitUrl,
      text: `/${gitUrl.split("/")[3]}`,
      icon: FaGithub,
    },
    {
      name: "email",
      link: email ?? "mailto:oi@marialemos.com",
      text: email ?? "oi@marialemos.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <SocialContainer>
      {socialNet.map((net, i) => (
        <SocialItem href={net.link} key={i}>
          {net.icon({})}
          {net.text}
        </SocialItem>
      ))}
    </SocialContainer>
  );
};
export default Social;
const SocialItem = styled.a`
  padding: 5px;
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.purple};
  }
  svg {
    margin-right: 0.2rem;
  }
`;
const SocialContainer = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 1rem;
  flex-wrap: wrap;
`;
