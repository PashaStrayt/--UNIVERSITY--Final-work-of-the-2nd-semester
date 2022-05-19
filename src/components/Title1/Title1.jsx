import React from "react";
import cl from './Title1.module.scss';

const Title1 = ({children, additionalCSS}) => {
  return (
    <h1 className={[cl.root, additionalCSS].join(' ')}>{children}</h1>
  );
};
export default Title1;