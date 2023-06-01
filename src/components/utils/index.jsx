import P from 'prop-types';

const Input = ({ id, text, handleChange, check }) => {
  return (
    <li className="option">
      <input type="checkbox" id={id} onChange={handleChange} checked={check} />
      <label htmlFor={id}>{text}</label>
    </li>
  );
};

Input.propTypes = {
  id: P.string.isRequired,
  text: P.string.isRequired,
  handleChange: P.func.isRequired,
  check: P.bool,
};

export default Input;
