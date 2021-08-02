import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const FooterYear = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const FooterIconLink = styled.a`
  color: #fff;
  font-size: 30px;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
