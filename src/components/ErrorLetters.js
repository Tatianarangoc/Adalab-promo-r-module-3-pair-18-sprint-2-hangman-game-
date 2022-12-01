import '../styles/components/letters.scss';
const ErrorLetters = (props) => {
  <div className="error">
    <h2 className="title">Letras falladas:</h2>
    <ul className="letters">{props.renderErrorLetters()}</ul>
  </div>;
};
export default ErrorLetters;
