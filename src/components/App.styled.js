import {
  AiFillUpCircle,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillEnvironment,
  AiFillMail,
  AiFillPhone,
  AiFillGithub,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 5px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #a19b19;
  }
`;

export const Footer = styled.footer`
  border-top: 5px solid black;
`;

export const FooterHeader = styled.h2`
  /* &:hover,
  &:focus {
    color: #a19b19;
  } */
  color: #a19b19;
`;

export const FooterHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactsHeader = styled.h3`
  margin: 0 0 0 10px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationHeader = styled.h3`
  margin: 0 0 0 10px;
`;

export const Mail = styled.div`
  display: flex;
  align-items: center;
`;

export const MailHeader = styled.h3`
  margin: 0 0 0 10px;
`;

export const Phone = styled(AiFillPhone)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;

export const EMail = styled(AiFillMail)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;

export const Geo = styled(AiFillEnvironment)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;

export const Facebook = styled(AiFillFacebook)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;

export const Twitter = styled(AiFillTwitterCircle)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;

export const GitHub = styled(AiFillGithub)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;

export const Top = styled(AiFillUpCircle)`
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;
