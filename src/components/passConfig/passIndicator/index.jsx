import React from 'react';
import './styles.css';
import { useMainContext } from '../../../context/MainContext';
const PassIndicator = () => {
  const [state] = useMainContext();
  let length = state.length;
  let id = length <= 8 ? 'weak' : length <= 16 ? 'medium' : 'strong';
  return <div className="pass-indicator" id={id}></div>;
};

export default PassIndicator;
