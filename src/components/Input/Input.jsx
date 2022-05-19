import React from "react";
import cl from './Input.module.scss';

const Input = ({...props}) => {
  return (
    <input type="text" className={cl.root} {...props}/>
  );
};
export default Input;