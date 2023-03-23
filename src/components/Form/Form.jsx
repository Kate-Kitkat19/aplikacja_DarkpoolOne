import { Button, Input, Label } from './Form.styled';

export const Form = ({ saveResult }) => {
  return (
    <form onSubmit={saveResult}>
      <Label htmlFor="dimensions">
        Please enter any number from 3 to 15{' '}
        <Input
          type="number"
          id="dimensions"
          min={3}
          max={15}
          name="number-input"
        ></Input>
      </Label>
      <Button type="submit" aria-label="submit form">
        Go!
      </Button>
    </form>
  );
};
