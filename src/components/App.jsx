import { useEffect, useState, useRef } from 'react';
import { Form } from './Form/Form';
import { Board } from './Board/Board';
import { Container } from './Layout.styled';
import { ShowHistoryBtn } from './ShowHistoryBtn/ShowHistoryBtn';
import { History } from './History/History';

export const App = () => {
  const [dimensions, setDimensions] = useState(3);
  const [positionX, setPositionX] = useState(null);
  const [positionY, setPositionY] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistoryTrack, setShowHistoryTrack] = useState(false);
  const currentSquareRef = useRef();
  const dimToNumber = parseInt(dimensions);

  useEffect(() => {
    function moveRover(event) {
      const keyName = event.key;
      switch (keyName) {
        case 'ArrowUp':
          setPositionY(prev => {
            return prev > 1 ? (prev -= 1) : 1;
          });
          break;
        case 'ArrowDown':
          setPositionY(prev => {
            return prev < dimToNumber ? (prev += 1) : dimToNumber;
          });
          break;
        case 'ArrowLeft':
          setPositionX(prev => {
            return prev > 1 ? (prev -= 1) : 1;
          });
          break;
        case 'ArrowRight':
          setPositionX(prev => {
            return prev < dimToNumber ? (prev += 1) : dimToNumber;
          });
          break;
        default:
          break;
      }
    }

    document.addEventListener('keydown', moveRover);

    return () => {
      document.removeEventListener('keydown', moveRover);
    };
  }, [dimToNumber]);

  useEffect(() => {
    setPositionX(Math.ceil(dimToNumber / 2));
    setPositionY(Math.ceil(dimToNumber / 2));
  }, [dimensions, dimToNumber]);

  useEffect(() => {
    function saveHistory(data) {
      if (data) {
        setHistory(prev => {
          return [...prev, data];
        });
      }
    }

    saveHistory(currentSquareRef.current?.id);
  }, [positionX, positionY]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const res = evt.target.elements.dimensions.value;
    setHistory([]);
    setDimensions(res);
  }

  const positions = { positionX, positionY };
  return (
    <Container>
      <Form saveResult={handleSubmit} />
      <Board
        dimensions={dimensions}
        positions={positions}
        ref={currentSquareRef}
      ></Board>
      <ShowHistoryBtn
        toggle={() => setShowHistoryTrack(prev => !prev)}
        show={showHistoryTrack}
      />
      {showHistoryTrack === true && <History data={history} />}
    </Container>
  );
};
