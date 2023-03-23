import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 5px 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  &:last-child {
    border-bottom: none;
  }
`;
