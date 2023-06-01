import { useEffect, useRef, useState } from 'react';
import { Alert, Button, InputBox, PassIndicator, PassLength, PassOptions } from '../../components';
import { useMainContext } from '../../context/MainContext';
import './styles.css';

function Home() {
  const [state, actions] = useMainContext();
  useEffect(() => {
    actions.generatePassword(state.optionsInput, state.length);
  }, [actions, state.optionsInput, state.length]);
  return (
    <div className="container">
      <h2>Gerador de senha</h2>
      <div className="wrapper">
        <InputBox value={state.results.password} />
        <PassIndicator />
        <Alert text={state.results.message} />
        <PassLength />
        <PassOptions />
        <Button />
      </div>
    </div>
  );
}

export default Home;
