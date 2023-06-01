import './styles.css';
import { useMainContext } from '../../../context/MainContext';
const PassLength = () => {
  const [state, actions] = useMainContext();
  const handleChanged = (e) => {
    const { value } = e.target;
    actions.changeLength({ length: value });
  };
  return (
    <div className="pass-length">
      <div className="details">
        <label className="title">Tamanho da senha</label>
        <span>{state.length}</span>
      </div>
      <input type="range" min="1" value={state.length || undefined} onChange={handleChanged} max="30" step="1" />
    </div>
  );
};

export default PassLength;
