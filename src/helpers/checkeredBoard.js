import { DarkSquare, LightSquare } from 'components/Board/Board.styled';
import { RoverComp } from 'components/Rover/Rover';

function checkeredBoard(dimension, position) {
  const dimToNumber = parseInt(dimension);
  if (!position) {
    position = Math.ceil(dimToNumber / 2);
  }

  console.log(position);
  const arr = [];
  let key = 1;
  for (let i = 1; i <= dimToNumber; i += 1) {
    const row = [];
    for (let j = 1; j <= dimToNumber; j += 1) {
      if ((i + j) % 2 === 0) {
        row.push(
          <DarkSquare key={key}>
            {i === position && j === position ? <RoverComp /> : key}
          </DarkSquare>
        );
      } else {
        row.push(
          <LightSquare key={key}>
            {i === position && j === position ? <RoverComp /> : key}
          </LightSquare>
        );
      }

      key += 1;
    }
    arr.push(row);
  }
  return arr;
}

export default checkeredBoard;
