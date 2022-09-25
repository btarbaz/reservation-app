import { Fragment, useState } from 'react';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

import {
  HeaderSearchItem,
  HeaderSearchText,
  HeaderSearchDate,
} from './header.styles';
import { FaCalendarDay } from 'react-icons/fa';

const SearchHeaderDate = ({ onSearch }) => {
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  onSearch(date);

  return (
    <Fragment>
      <HeaderSearchItem>
        <FaCalendarDay style={{ color: 'lightgray' }} />
        <HeaderSearchText onClick={() => setIsOpenDate(!isOpenDate)}>
          {`${format(date[0].startDate, 'MM/dd/yyyy')}`} to
          {`${format(date[0].endDate, 'MM/dd/yyyy')}`}
        </HeaderSearchText>
        {isOpenDate && (
          <HeaderSearchDate onMouseLeave={() => setIsOpenDate(false)}>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </HeaderSearchDate>
        )}
      </HeaderSearchItem>
    </Fragment>
  );
};

export default SearchHeaderDate;
