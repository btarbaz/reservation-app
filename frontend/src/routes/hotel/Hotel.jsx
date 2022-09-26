import { Fragment } from 'react';
import HotelList from '../../components/hotelList/HotelList';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { HotelContainer } from './hotel.styles';

const Hotel = () => {
  return (
    <Fragment>
      <HotelContainer>
        <HotelList />
        <MailList />
        <Footer />
      </HotelContainer>
    </Fragment>
  );
};

export default Hotel;
