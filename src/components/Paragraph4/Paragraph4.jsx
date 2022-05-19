import React from "react";
import cl from './Paragraph4.module.scss';

const Paragraph4 = ({children, additionalCSS}) => {
  return (
    <p className={[cl.root, additionalCSS].join(' ')}>{children}</p>
  );
};
export default Paragraph4;