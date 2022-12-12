const Form = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }; //f
  const handleClickLetter = (ev) => {
    props.handleClickLetterr(ev.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        onChange={props.handleClickLetter}
        value={props.lastLetter}
      />
    </form>
  );
};
export default Form;
