import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Social: React.FC = () => {
  const socialNet = [
    { name: "facebook", link: "/", text: "/maria.lemos", icon: FaFacebook },
    { name: "linkedin", link: "/", text: "/maria.lemos", icon: FaLinkedin },
    { name: "github", link: "/", text: "/maria.lemos", icon: FaGithub },
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
  &:hover {
    transform: scale(1.1);
    color: #9844b7;
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
