import { Fragment, useState } from 'react';
import { FaPersonBooth } from 'react-icons/fa';

import {
  HeaderSearchItem,
  HeaderSearchText,
  Options,
  OptionItem,
  OptionText,
  OptionCounterButton,
  OptionCounterNumber,
  OptionCounter,
} from './header.styles';

const SearchHeaderOption = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const optionHandler = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <Fragment>
      <HeaderSearchItem onClick={() => setIsOptionOpen(!isOptionOpen)}>
        <FaPersonBooth style={{ color: 'lightgray' }} />
        <HeaderSearchText>{`${options.adult} adults . ${options.children} children . ${options.room} room`}</HeaderSearchText>
        {isOptionOpen && (
          <Options>
            <OptionItem>
              <OptionText>Adult</OptionText>
              <OptionCounter>
                <OptionCounterButton
                  disabled={options.adult <= 1}
                  onClick={() => optionHandler('adult', 'd')}
                >
                  -
                </OptionCounterButton>
                <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                <OptionCounterButton
                  onClick={() => optionHandler('adult', 'i')}
                >
                  +
                </OptionCounterButton>
              </OptionCounter>
            </OptionItem>
            <OptionItem>
              <OptionText>Children</OptionText>
              <OptionCounter>
                <OptionCounterButton
                  disabled={options.children <= 0}
                  onClick={() => optionHandler('children', 'd')}
                >
                  -
                </OptionCounterButton>
                <OptionCounterNumber>{options.children}</OptionCounterNumber>
                <OptionCounterButton
                  onClick={() => optionHandler('children', 'i')}
                >
                  +
                </OptionCounterButton>
              </OptionCounter>
            </OptionItem>
            <OptionItem>
              <OptionText>Room</OptionText>
              <OptionCounter>
                <OptionCounterButton
                  disabled={options.room <= 1}
                  onClick={() => optionHandler('room', 'd')}
                >
                  -
                </OptionCounterButton>
                <OptionCounterNumber>{options.room}</OptionCounterNumber>
                <OptionCounterButton onClick={() => optionHandler('room', 'i')}>
                  +
                </OptionCounterButton>
              </OptionCounter>
            </OptionItem>
          </Options>
        )}
      </HeaderSearchItem>
    </Fragment>
  );
};

export default SearchHeaderOption;
