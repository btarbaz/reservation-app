import styled from 'styled-components';

export const PropertyListContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const PropertyListItem = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const PropertyListImg = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

export const PropertyListTitles = styled.div`
  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 14px;
    font-weight: 300;
  }
`;
