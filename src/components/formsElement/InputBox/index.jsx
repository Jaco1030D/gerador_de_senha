import React, { useState } from 'react';
import P from 'prop-types';
import './styles.css';
const InputBox = ({ value }) => {
  const [info, setInfo] = useState({
    color: '#707070',
    text: 'copy_all',
  });
  const handleClick = () => {
    navigator.clipboard.writeText(value);
    setInfo({
      color: '#4285F4',
      text: 'check',
    });
    setTimeout(() => {
      setInfo({
        color: '#707070',
        text: 'copy_all',
      });
    }, 1500);
  };
  return (
    <div className="input-box">
      <input type="text" value={value || ''} disabled />
      <span className="material-symbols-rounded" style={{ color: info.color }} onClick={handleClick}>
        {info.text}
      </span>
    </div>
  );
};

InputBox.propTypes = {
  value: P.string,
};

export default InputBox;
