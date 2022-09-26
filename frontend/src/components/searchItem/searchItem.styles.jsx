import styled from 'styled-components';

export const SearchItemContainer = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export const SearchItemImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
export const SearchItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;

export const SearchItemTitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;
export const SearchItemDistance = styled.span`
  font-size: 12px;
`;
export const SearchItemTaxiOp = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;

export const SearchItemSubtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
export const SearchItemFeatures = styled.span`
  font-size: 12px;
`;
export const SearchItemCancelOp = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

export const SearchItemCancelOpSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`;

export const SearchItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchItemRating = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 500;
  }
  button {
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
  }
`;

export const SearchItemDetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SearchItemPrice = styled.span`
  font-size: 24px;
`;

export const SearchItemTaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;

export const SearchItemCheckButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
