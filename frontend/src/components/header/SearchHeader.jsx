import { Fragment, useState } from 'react';

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
  const [destination, setDestination] = useState('');
  const onChangeHandler = event => {
    setDestination(event.target.value);
  };

  const searchState = {
    destination,
    date: {},
    options: {},
  };
  const onSearchHandler = () => {
    console.log(searchState);
  };
  return (
    <Fragment>
      <HeaderSearch>
        <HeaderSearchItem>
          <FaBed style={{ color: 'lightgray' }} />
          <HeaderSearchInput
            type="text"
            placeholder="where are you going"
            onChange={onChangeHandler}
            value={destination}
          />
        </HeaderSearchItem>
        {/* Date component */}
        <SearchHeaderDate onSearch={date => (searchState.date = date)} />
        {/* Option component */}
        <SearchHeaderOption
          onSearch={options => (searchState.options = options)}
        />
        <HeaderSearchItem>
          <HeaderButton onClick={onSearchHandler}>Search</HeaderButton>
        </HeaderSearchItem>
      </HeaderSearch>
    </Fragment>
  );
};

export default SearchHeader;
