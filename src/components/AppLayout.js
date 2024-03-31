import { Link, Outlet } from 'react-router-dom';
import {
  Contacts,
  ContactsHeader,
  Container,
  EMail,
  Facebook,
  Footer,
  FooterHeader,
  FooterHeaderWrapper,
  FooterWrapper,
  Geo,
  GitHub,
  Header,
  Location,
  LocationHeader,
  Logo,
  Mail,
  MailHeader,
  Phone,
  StyledLink,
  Top,
  Twitter,
} from './App.styled';
import { Suspense, useRef } from 'react';

export const AppLayout = () => {
  const topRef = useRef();

  const handleTop = () => {
    const dims = topRef.current.getBoundingClientRect();
    window.scrollBy({
      top: dims.top,
      behavior: 'smooth',
    });
  };
  return (
    <Container>
      <Header ref={topRef}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
          <Logo>
            <span role="img" aria-label="computer icon">
              🎬
            </span>{' '}
            MovieDB
          </Logo>
        </Link>
        <nav>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading Page...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer>
        <FooterHeaderWrapper>
          <FooterHeader>Movie DB</FooterHeader>
          <Top onClick={handleTop} />
        </FooterHeaderWrapper>
        <FooterWrapper>
          <nav>
            <Contacts>
              <Phone />
              <ContactsHeader>Contacts</ContactsHeader>
            </Contacts>
            <Location>
              <Geo />
              <LocationHeader>Location</LocationHeader>
            </Location>
            <Mail>
              <EMail />
              <MailHeader>E-Mail</MailHeader>
            </Mail>
          </nav>

          <div>
            <Facebook />
            <Twitter />
            <GitHub />
          </div>
        </FooterWrapper>
      </Footer>
    </Container>
  );
};
