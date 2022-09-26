import styled from 'styled-components';

export const SearchListContainer = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;

  button {
    padding: 10px;
    background-color: #0071c2;
    color: white;
    border: none;
    width: 100%;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const SearchListTitle = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

export const SearchListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;

  label {
    font-size: 12px;
  }
`;

export const SearchListItemInput = styled.input`
  height: 30px;
  border: none;
  padding: 5px;
`;
export const SearchListItemSpan = styled.span`
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchListOptions = styled.div`
  padding: 10px;
`;

export const SearchListOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;

  input {
    width: 50px;
  }
`;
