import React from "react";
import cl from './MyStackList.module.scss';
import MyStackItem from "../MyStackItem/MyStackItem";

const MyStackList = ({stackList}) => {
  return (
    <div className={cl.root}>
      {
        stackList.map(item =>
          <MyStackItem
          additionalCSS={cl.root__item}
          text={item.text}
          icon1={item.icon1}
          icon2={item.icon2}
          key={item.key}
          />
        )
      }
    </div>
  );
};
export default MyStackList;