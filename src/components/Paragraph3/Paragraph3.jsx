import React from "react";
import cl from './Paragraph3.module.scss';

const Paragraph3 = ({children}) => {
  return (
    <p className={cl.root}>{children}</p>
  );
};
export default Paragraph3;