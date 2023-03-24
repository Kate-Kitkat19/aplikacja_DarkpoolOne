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
  border-bottom: 1px solid #f2dfd7;
  text-align: center;
  &:last-child {
    border-bottom: none;
  }
`;

export const Wrapper = styled.div`
  border: 1px solid #f2dfd7;
  padding: 15px;
  background-color: #d4c1ec;
  display: flex;
  flex-direction: column;
`;
