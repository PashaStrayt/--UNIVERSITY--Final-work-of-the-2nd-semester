import React from "react";
import cl from './Title5.module.scss';

const Title5 = ({children, additionalCSS}) => {
  return (
    <h2 className={[cl.root, additionalCSS].join(' ')}>{children}</h2>
  );
};
export default Title5;