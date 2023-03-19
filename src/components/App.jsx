import checkeredBoard from 'helpers/checkeredBoard';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from './Input/Form';
import { Board } from './Board/Board';
import { Container } from './Layout.styled';

export const App = () => {
  const [dimensions, setDimensions] = useState(3);

  return (
    <Container>
      <Form saveResult={setDimensions} />
      <Board dimensions={dimensions}></Board>
    </Container>
  );
};
