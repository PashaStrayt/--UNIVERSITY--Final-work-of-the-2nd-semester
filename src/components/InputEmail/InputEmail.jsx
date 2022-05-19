import React from "react";
import cl from './InputEmail.module.scss';

const InputEmail = ({children, additionalCSS}) => {
  return (
    <input
    className={[cl.root, additionalCSS].join(' ')}
    placeholder="Введите свой адрес электронной почты..."
    />
  );
};
export default InputEmail;