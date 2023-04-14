import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #fdf0f7;

  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 18px 9px rgba(0, 0, 0, 0.75);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 22px;
  margin-left: 70px;
  font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: #ff0068;
  }
`;

export const LoaderContainer = styled.div`
  margin-top: 50px;
`;
