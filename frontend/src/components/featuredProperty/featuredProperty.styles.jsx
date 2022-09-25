import styled from 'styled-components';

export const FeaturedPropertyContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const FeaturedPropertyItem = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const FeaturedPropertyImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const FeaturedPropertyName = styled.span`
  color: #333;
  font-weight: bold;
`;

export const FeaturedPropertyCity = styled.span`
  font-weight: 300;
`;

export const FeaturedPropertyPrice = styled.span`
  font-weight: 500;
`;

export const FeaturedPropertyRating = styled.div`
  button {
    background-color: #003580;
    color: white;
    padding: 3px;
    border: none;
    margin-right: 10px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }
`;
