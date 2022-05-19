import React from "react";
import cl from './Textarea.module.scss';

const Textarea = ({...props}) => {
  return (
    <textarea className={cl.root} {...props}></textarea>
  );
};
export default Textarea;