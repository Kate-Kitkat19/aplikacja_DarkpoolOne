import { List, ListItem, Wrapper } from './History.styled';

export const History = ({ data }) => {
  let uniqueSquares = data
    .filter((c, index) => {
      return data.indexOf(c) === index;
    })
    .sort((a, b) => {
      return a - b;
    });

  return (
    <Wrapper>
      <h2>You`ve explored following squares:</h2>
      <List>
        {uniqueSquares.map(number => {
          return <ListItem key={number}>№{number}</ListItem>;
        })}
      </List>
    </Wrapper>
  );
};
