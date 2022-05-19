import React from "react";
import cl from './BtnSwipe.module.scss';
import left from './left.svg';
import right from './right.svg';

const BtnSwipe = ({side, ...props}) => {
  let src = side === 'left' ? left : right;

  return (
    <button className={cl.root} {...props}>
      <img src={src} alt="" />
    </button>
  );
};
export default BtnSwipe;