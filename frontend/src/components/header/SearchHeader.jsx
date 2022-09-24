import { Fragment } from 'react';

import { FaBed } from 'react-icons/fa';

import {
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchItem,
  HeaderButton,
} from './header.styles';
import SearchHeaderDate from './SearchHeaderDate';
import SearchHeaderOption from './SearchHeaderOption';

const SearchHeader = () => {
  return (
    <Fragment>
      <HeaderSearch>
        <HeaderSearchItem>
          <FaBed style={{ color: 'lightgray' }} />
          <HeaderSearchInput type="text" placeholder="where are you going" />
        </HeaderSearchItem>
        {/* Date component */}
        <SearchHeaderDate />
        {/* Option component */}
        <SearchHeaderOption />
        <HeaderSearchItem>
          <HeaderButton>Search</HeaderButton>
        </HeaderSearchItem>
      </HeaderSearch>
    </Fragment>
  );
};

export default SearchHeader;
