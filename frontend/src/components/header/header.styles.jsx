import styled from 'styled-components';

export const HeaderBody = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0px 0px 100px 0px;
`;

export const HeaderTitle = styled.h1``;

export const HeaderDesc = styled.p`
  margin: 20px 0px;
`;

export const HeaderButton = styled.button`
  color: white;
  font-weight: 500;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #0071c2;
`;

export const HeaderSearch = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;

export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
`;

export const HeaderSearchText = styled.span`
  color: lightgray;
  cursor: pointer;
`;

export const HeaderSearchDate = styled.div`
  position: absolute;
  top: 50px;
`;

export const Options = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;

export const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;

export const OptionText = styled.span``;

export const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  :disabled {
    cursor: not-allowed;
  }
  cursor: pointer;
  background-color: white;
`;

export const OptionCounterNumber = styled.span``;
