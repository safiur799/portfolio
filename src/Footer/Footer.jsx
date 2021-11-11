import React from "react";
import styled from "styled-components";
function Footer() {
  return <Section>Copyright&copy;{new Date().getFullYear()}</Section>;
}

export default Footer;

const Section = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: hsl(210, 11%, 15%);
  height: 60px;
`;
