import React from 'react';
import './Button.css';

const Button = ({ children, type = 'primary', onClick }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
