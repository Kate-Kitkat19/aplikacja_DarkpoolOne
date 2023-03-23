import { List, ListItem } from './History.styled';

export const History = ({ data }) => {
  let uniqueSquares = data.filter((c, index) => {
    return data.indexOf(c) === index;
  });
  uniqueSquares = uniqueSquares.sort((a, b) => {
    return a - b;
  });

  return (
    <div>
      <h2>You`ve explored following squares:</h2>
      <List>
        {uniqueSquares.map(number => {
          return <ListItem key={number}>{number}</ListItem>;
        })}
      </List>
    </div>
  );
};
