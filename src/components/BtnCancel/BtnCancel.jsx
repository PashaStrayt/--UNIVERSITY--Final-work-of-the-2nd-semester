import React from "react";
import cl from './BtnCancel.module.scss';

const BtnSubmit = ({...props}) => {
  return (
    <button className={cl.root} {...props}>Отмена</button>
  );
};
export default BtnSubmit;