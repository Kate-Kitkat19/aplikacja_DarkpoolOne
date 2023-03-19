export const Form = props => {
  function saveDimensions(evt) {
    evt.preventDefault();
    const res = evt.target.elements.dimensions.value;
    props.saveResult(res);
  }
  return (
    <form onSubmit={saveDimensions}>
      <label>
        Please enter any number from 3 to 15{' '}
        <input type="number" id="dimensions" min={3} max={15}></input>
      </label>
      <button type="submit" aria-label="submit form">
        Go!
      </button>
    </form>
  );
};
