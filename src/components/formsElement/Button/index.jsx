import { useMainContext } from '../../../context/MainContext';
import './styles.css';
const Button = () => {
  const [state, actions] = useMainContext();
  return (
    <button
      disabled={state.length <= 8}
      onClick={() => actions.generatePassword(state.optionsInput, state.length)}
      className="generate-btn"
    >
      Gerar Senha
    </button>
  );
};

export default Button;
