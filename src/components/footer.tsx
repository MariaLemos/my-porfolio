import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <div>© Copyright 2021</div>
    </FooterWrapper>
  );
}

export default Footer;
const FooterWrapper = styled.footer`
  margin: auto;
`;
