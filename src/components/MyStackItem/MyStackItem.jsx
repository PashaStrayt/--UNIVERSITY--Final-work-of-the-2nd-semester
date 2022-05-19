import React from "react";
import cl from './MyStackItem.module.scss';
import Paragraph3 from '../Paragraph3/Paragraph3';

const MyStackItem = ({icon1, icon2, text}) => {
  return (
    <div className={cl.root}>
      <div className={cl.root__imgBlock}>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
      </div>
      <Paragraph3>{text}</Paragraph3>
    </div>
  );
};
export default MyStackItem;