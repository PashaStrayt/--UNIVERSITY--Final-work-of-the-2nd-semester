import React from "react";
import cl from './Title2.module.scss';

const Title2 = ({children, additionalCSS}) => {
  return (
    <h2 className={[cl.root, additionalCSS].join(' ')}>{children}</h2>
  );
};
export default Title2;