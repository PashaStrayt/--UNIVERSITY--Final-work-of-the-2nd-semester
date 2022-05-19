import React from "react";
import cl from './Paragraph2.module.scss';

const Paragraph2 = ({children, additionalCSS}) => {
  return (
    <p className={[cl.root, additionalCSS].join(' ')}>{children}</p>
  );
};
export default Paragraph2;