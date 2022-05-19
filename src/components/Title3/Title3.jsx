import React from "react";
import cl from './Title3.module.scss';

const Title3 = ({children, additionalCSS}) => {
  return (
    <h2 className={[cl.root, additionalCSS].join(' ')}>{children}</h2>
  );
};
export default Title3;