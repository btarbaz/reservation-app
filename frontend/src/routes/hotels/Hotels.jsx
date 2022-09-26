import { Fragment } from 'react';
import SearchItems from '../../components/searchItems/SearchItems';
import SearchList from '../../components/searchList/SearchList';
import { HotelsContainer, HotelsWrapper } from './hotels.styles';

const Hotels = () => {
  return (
    <Fragment>
      <HotelsContainer>
        <HotelsWrapper>
          <SearchList />
          <SearchItems />
        </HotelsWrapper>
      </HotelsContainer>
    </Fragment>
  );
};

export default Hotels;
