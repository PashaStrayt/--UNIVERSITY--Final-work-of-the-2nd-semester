import React from "react";
import cl from './DotCount.module.scss';

const DotCount = ({id, activeId}) => {
  let classes = id === activeId ? [cl.root, cl.active].join(' ') : cl.root;

  return (
    <button className={classes}></button>
  );
};
export default DotCount;