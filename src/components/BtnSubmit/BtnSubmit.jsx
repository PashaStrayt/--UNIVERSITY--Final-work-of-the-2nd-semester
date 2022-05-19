import React from "react";
import cl from './BtnSubmit.module.scss';

const BtnSubmit = ({...props}) => {
  return (
    <button type="submit" className={cl.root} {...props}>Отправить</button>
  );
};
export default BtnSubmit;