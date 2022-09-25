import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  width: 1024px;
  font-size: 12px;
`;

export const FooterLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    color: #003580;
    cursor: pointer;
  }
`;
