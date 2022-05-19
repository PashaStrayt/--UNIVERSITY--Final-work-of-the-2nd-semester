import React from "react";
import cl from './Link.module.scss';

const Link = ({children}) => {
  return (
    <a className={cl.root}>{children}</a>
  );
};
export default Link;