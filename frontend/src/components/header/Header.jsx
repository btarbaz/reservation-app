import { Fragment } from 'react';

import {
  HeaderContainer,
  HeaderBody,
  HeaderButton,
  HeaderDesc,
  HeaderTitle,
} from './header.styles';
import SearchHeader from './SearchHeader';
const Header = () => {
  return (
    <Fragment>
      <HeaderBody>
        <HeaderContainer>
          <HeaderTitle>A lifetime of discounts ? It's Genius.</HeaderTitle>
          <HeaderDesc>
            Get rewarded for your travel - Unlock instant saving of 10% or more
            with a free Akbooking account
          </HeaderDesc>
          <HeaderButton>Sign In/Register</HeaderButton>
          {/* Search component */}
          <SearchHeader />
        </HeaderContainer>
      </HeaderBody>
    </Fragment>
  );
};

export default Header;
