import P from 'prop-types';
import './styles.css';
const Alert = ({ text }) => {
  return (
    <div className="text">
      <p>{text}</p>
    </div>
  );
};

Alert.propTypes = {
  text: P.string,
};

export default Alert;
