import Featured from '../../components/featured/Featured';
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import PropertyList from '../../components/propertyList/PropertyList';
import { HomeContainer } from './home.styles';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeContainer>
        <Featured />
        <h1 style={{ width: '1024px', fontSize: '20px' }}>
          Browse by property type
        </h1>
        <PropertyList />
        <h1 style={{ width: '1024px', fontSize: '20px' }}>Homes guests love</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </HomeContainer>
    </div>
  );
};

export default Home;
