import { Button } from './ShowHistoryBtn.styled';

export const ShowHistoryBtn = ({ toggle, show }) => {
  return (
    <Button type="button" aria-label="show my history" onClick={toggle}>
      {show ? 'Hide my track history!' : 'Show my track history!'}
    </Button>
  );
};
