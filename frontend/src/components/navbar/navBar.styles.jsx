import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  font-weight: 500;
  color: white;
  text-decoration: none;
`;

export const NavBarLinksContainer = styled.div``;

export const NavBarLink = styled(Link)`
  margin-left: 25px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  text-decoration: none;
`;
