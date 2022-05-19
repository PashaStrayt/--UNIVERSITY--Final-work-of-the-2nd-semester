import React from "react";
import cl from './Title4.module.scss';

const Title4 = ({children, additionalCSS}) => {
  return (
    <h2 className={[cl.root, additionalCSS].join(' ')}>{children}</h2>
  );
};
export default Title4;