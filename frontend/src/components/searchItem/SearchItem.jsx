import {
  SearchItemCancelOp,
  SearchItemCancelOpSubtitle,
  SearchItemCheckButton,
  SearchItemContainer,
  SearchItemDesc,
  SearchItemDetails,
  SearchItemDetailTexts,
  SearchItemDistance,
  SearchItemFeatures,
  SearchItemImg,
  SearchItemPrice,
  SearchItemRating,
  SearchItemSubtitle,
  SearchItemTaxiOp,
  SearchItemTaxOp,
  SearchItemTitle,
} from './searchItem.styles';

const SearchItem = () => {
  return (
    <SearchItemContainer>
      <SearchItemImg
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <SearchItemDesc>
        <SearchItemTitle>Tower Street Apartments</SearchItemTitle>
        <SearchItemDistance>500m from center</SearchItemDistance>
        <SearchItemTaxiOp>Free airport taxi</SearchItemTaxiOp>
        <SearchItemSubtitle>
          Studio Apartment with Air conditioning
        </SearchItemSubtitle>
        <SearchItemFeatures>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </SearchItemFeatures>
        <SearchItemCancelOp>Free cancellation </SearchItemCancelOp>
        <SearchItemCancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </SearchItemCancelOpSubtitle>
      </SearchItemDesc>
      <SearchItemDetails>
        <SearchItemRating>
          <span>Excellent</span>
          <button>8.9</button>
        </SearchItemRating>
        <SearchItemDetailTexts>
          <SearchItemPrice>$112</SearchItemPrice>
          <SearchItemTaxOp>Includes taxes and fees</SearchItemTaxOp>
          <SearchItemCheckButton>See availability</SearchItemCheckButton>
        </SearchItemDetailTexts>
      </SearchItemDetails>
    </SearchItemContainer>
  );
};

export default SearchItem;
