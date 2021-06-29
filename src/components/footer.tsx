import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterWrapper>© Copyright 2021</FooterWrapper>;
}

export default Footer;
const FooterWrapper = styled.footer`
  margin: auto;
  max-height: 5vh;
  padding-bottom: 0.5rem;
`;
