import { Fragment } from 'react';
import { FaBed, FaCar, FaPlane, FaTaxi } from 'react-icons/fa';
import {
  NavListBody,
  NavListContainer,
  List,
  ListItem,
  ListItemActive,
} from './navList.styles';

const NavList = () => {
  return (
    <Fragment>
      <NavListBody>
        <NavListContainer>
          <List>
            <ListItemActive>
              <FaBed />
              <span>Stays</span>
            </ListItemActive>
            <ListItem>
              <FaPlane />
              <span>Flights</span>
            </ListItem>
            <ListItem>
              <FaCar />
              <span>Car Rental</span>
            </ListItem>
            <ListItem>
              <FaBed />
              <span>Attractions</span>
            </ListItem>
            <ListItem>
              <FaTaxi />
              <span>Airport Taxis</span>
            </ListItem>
          </List>
        </NavListContainer>
      </NavListBody>
    </Fragment>
  );
};

export default NavList;
