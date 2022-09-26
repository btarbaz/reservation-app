import { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import {
  SearchListContainer,
  SearchListItem,
  SearchListItemInput,
  SearchListItemSpan,
  SearchListOptionItem,
  SearchListOptions,
  SearchListTitle,
} from './searchList.styles';
const SearchList = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [isDateOpen, setIsDateOpen] = useState(false);

  const [options, setOptions] = useState(location.state.options);
  return (
    <Fragment>
      <SearchListContainer>
        <SearchListTitle>Search</SearchListTitle>
        <SearchListItem>
          <label>Destination</label>
          <SearchListItemInput
            type="text"
            value={destination}
            onChange={event => setDestination(event.target.value)}
          />
        </SearchListItem>
        <SearchListItem>
          <label>Check-in dates</label>
          <SearchListItemSpan onClick={() => setIsDateOpen(!isDateOpen)}>
            {`${format(date[0].startDate, 'MM/dd/yyyy')}`} to{' '}
            {`${format(date[0].endDate, 'MM/dd/yyyy')}`}
          </SearchListItemSpan>
          {isDateOpen && (
            <DateRange
              onChange={item => {
                setDate([item.selection]);
              }}
              minDate={new Date()}
              ranges={date}
            />
          )}
        </SearchListItem>
        <SearchListItem>
          <label>Options</label>
          <SearchListOptions>
            <SearchListOptionItem>
              <span className="optionSpan">
                Min price <small>per night</small>
              </span>
              <input type="number" />
            </SearchListOptionItem>
            <SearchListOptionItem>
              <span className="optionSpan">
                Max price <small>per night</small>
              </span>
              <input type="number" />
            </SearchListOptionItem>
            <SearchListOptionItem>
              <span className="optionSpan">Adult</span>
              <input type="number" placeholder={options.adult} min={1} />
            </SearchListOptionItem>
            <SearchListOptionItem>
              <span className="optionSpan">Children</span>
              <input type="number" placeholder={options.children} min={0} />
            </SearchListOptionItem>
            <SearchListOptionItem>
              <span className="optionSpan">Room</span>
              <input type="number" placeholder={options.room} min={1} />
            </SearchListOptionItem>
          </SearchListOptions>
        </SearchListItem>
        <button>Search</button>
      </SearchListContainer>
    </Fragment>
  );
};

export default SearchList;
