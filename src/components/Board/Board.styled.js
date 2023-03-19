import styled from 'styled-components';

export const LightSquare = styled.div`
  margin: 0;
  padding: 0;
  width: 100px;
  height: 100px;
  background-color: wheat;
  border: 1px solid grey;
`;

export const DarkSquare = styled.div`
  margin: 0;
  padding: 0;
  width: 100px;
  height: 100px;
  background-color: darkgray;
  border: 1px solid grey;
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
