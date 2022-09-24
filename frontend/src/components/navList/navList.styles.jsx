import styled from 'styled-components';

export const NavListBody = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const NavListContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 20px 0px;
`;

export const List = styled.div`
  display: flex;
  gap: 40px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ListItemActive = styled(ListItem)`
  border: 1px solid white;
  padding: 10px;
  border-radius: 20px;
`;
