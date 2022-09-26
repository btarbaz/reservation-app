import styled from 'styled-components';

export const HLContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

export const HLBookNowBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

export const HLTitle = styled.h1`
  font-size: 24px;
`;

export const HLAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HLDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;

export const HLPriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;

export const HLImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HLImgWrapper = styled.div`
  width: 33%;
`;

export const HLImg = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const HLDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const HLDetailsTexts = styled.div`
  flex: 3;
`;

export const HLDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

export const HLDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 18px;
    color: #555;
  }
  span {
    font-size: 14px;
  }
  h2 {
    font-weight: 300;
  }
  button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderImg = styled.img`
  width: 80%;
  height: 80vh;
`;

export const SliderClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: lightgray;
  cursor: pointer;
`;

export const SliderArrow = styled.div`
  margin: 20px;
  font-size: 50px;
  color: lightgray;
  cursor: pointer;
`;
