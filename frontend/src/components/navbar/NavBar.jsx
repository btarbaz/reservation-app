import { FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Fragment } from 'react';
import {
  Navbar,
  NavBarContainer,
  NavBarLink,
  NavBarLinksContainer,
  LogoContainer,
} from './navBar.styles';
import { Outlet } from 'react-router-dom';
import NavList from '../navList/NavList';

const NavBar = () => {
  return (
    <Fragment>
      <Navbar>
        <NavBarContainer>
          <LogoContainer>Booking</LogoContainer>
          <NavBarLinksContainer>
            <NavBarLink>
              <FaSignInAlt /> Login
            </NavBarLink>
            <NavBarLink>
              <FaUserAlt /> Register
            </NavBarLink>
          </NavBarLinksContainer>
        </NavBarContainer>
      </Navbar>
      <NavList />
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default NavBar;
