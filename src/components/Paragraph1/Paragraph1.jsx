import React from "react";
import cl from './Paragraph1.module.scss';

const Paragraph1 = ({children, additionalCSS}) => {
  return (
    <p className={[cl.root, additionalCSS].join(' ')}>{children}</p>
  );
};
export default Paragraph1;