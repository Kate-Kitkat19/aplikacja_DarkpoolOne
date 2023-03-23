import { Wrapper, BoardContainer } from './Board.styled';
import { DarkSquare, LightSquare } from './Board.styled';
import { RoverComp } from 'components/Rover/Rover';
import { forwardRef } from 'react';

export const Board = forwardRef((props, ref) => {
  const { dimensions, positions } = props;
  const { positionX, positionY } = positions;
  function checkeredBoard(dimension, positionX, positionY) {
    const arr = [];
    let key = 1;
    for (let i = 1; i <= dimension; i += 1) {
      const row = [];
      for (let j = 1; j <= dimension; j += 1) {
        if ((i + j) % 2 === 0) {
          row.push(
            <DarkSquare
              key={key}
              id={key}
              ref={i === positionY && j === positionX ? ref : null}
            >
              {i === positionY && j === positionX ? <RoverComp /> : key}
            </DarkSquare>
          );
        } else {
          row.push(
            <LightSquare
              key={key}
              id={key}
              ref={i === positionY && j === positionX ? ref : null}
            >
              {i === positionY && j === positionX ? <RoverComp /> : key}
            </LightSquare>
          );
        }

        key += 1;
      }
      arr.push(row);
    }

    return arr;
  }

  const board = checkeredBoard(dimensions, positionX, positionY);

  return (
    <BoardContainer>
      {board.map(arr => {
        return <Wrapper key={crypto.randomUUID()}>{arr}</Wrapper>;
      })}
    </BoardContainer>
  );
});
