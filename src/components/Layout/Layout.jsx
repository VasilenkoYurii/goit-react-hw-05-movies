import { Outlet } from 'react-router-dom';
import { Header, NavList, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavList>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
