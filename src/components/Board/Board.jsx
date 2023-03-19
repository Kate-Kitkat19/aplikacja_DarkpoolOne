import checkeredBoard from 'helpers/checkeredBoard';
import { Wrapper, BoardContainer } from './Board.styled';

export const Board = ({ dimensions }) => {
  const board = checkeredBoard(dimensions);
  return (
    <BoardContainer>
      {board.map(arr => {
        return <Wrapper key={crypto.randomUUID()}>{arr}</Wrapper>;
      })}
    </BoardContainer>
  );
};
