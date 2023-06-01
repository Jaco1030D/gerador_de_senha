import React, { useRef } from 'react';
import { OptionsContent } from '../../../const/Texts';
import Input from '../../utils';
import './styles.css';
import { useMainContext } from '../../../context/MainContext';
const PassOptions = () => {
  const [state, actions] = useMainContext();
  const handleChange = (e) => {
    const { id, checked } = e.target;
    actions.changeOptions({ [id]: checked });
  };
  return (
    <div className="pass-settings">
      <label className="title">Opções de caracteres</label>
      <ul className="options">
        {OptionsContent.map((item, index) => {
          return (
            <Input
              key={item.id}
              id={item.id}
              text={item.text}
              handleChange={handleChange}
              check={state.optionsInput[Object.keys(state.optionsInput)[index]]}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PassOptions;
