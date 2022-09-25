import {
  FeaturedPropertyCity,
  FeaturedPropertyContainer,
  FeaturedPropertyImg,
  FeaturedPropertyItem,
  FeaturedPropertyName,
  FeaturedPropertyPrice,
  FeaturedPropertyRating,
} from './featuredProperty.styles';

const FeaturedProperty = () => {
  return (
    <FeaturedPropertyContainer>
      <FeaturedPropertyItem>
        <FeaturedPropertyImg
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
        />
        <FeaturedPropertyName>Aparthotel Stare Miasto</FeaturedPropertyName>
        <FeaturedPropertyCity>Madrid</FeaturedPropertyCity>
        <FeaturedPropertyPrice>Starting from $120</FeaturedPropertyPrice>
        <FeaturedPropertyRating>
          <button>8.9</button>
          <span>Excellent</span>
        </FeaturedPropertyRating>
      </FeaturedPropertyItem>
      <FeaturedPropertyItem>
        <FeaturedPropertyImg
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
        />
        <FeaturedPropertyName>Comfort Suites Airport</FeaturedPropertyName>
        <FeaturedPropertyCity>Austin</FeaturedPropertyCity>
        <FeaturedPropertyPrice>Starting from $140</FeaturedPropertyPrice>
        <FeaturedPropertyRating>
          <button>9.3</button>
          <span>Exceptional</span>
        </FeaturedPropertyRating>
      </FeaturedPropertyItem>
      <FeaturedPropertyItem>
        <FeaturedPropertyImg
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
        />
        <FeaturedPropertyName>Four Season Hotel</FeaturedPropertyName>
        <FeaturedPropertyCity>Lisbon</FeaturedPropertyCity>
        <FeaturedPropertyPrice>Starting from $99</FeaturedPropertyPrice>
        <FeaturedPropertyRating>
          <button>8.8</button>
          <span>Excellent</span>
        </FeaturedPropertyRating>
      </FeaturedPropertyItem>
      <FeaturedPropertyItem>
        <FeaturedPropertyImg
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
        />
        <FeaturedPropertyName>Hilton Garden Inn</FeaturedPropertyName>
        <FeaturedPropertyCity>Berlin</FeaturedPropertyCity>
        <FeaturedPropertyPrice>Starting from $105</FeaturedPropertyPrice>
        <FeaturedPropertyRating>
          <button>8.9</button>
          <span>Excellent</span>
        </FeaturedPropertyRating>
      </FeaturedPropertyItem>
    </FeaturedPropertyContainer>
  );
};

export default FeaturedProperty;
