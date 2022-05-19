import React from "react";
import cl from './TasksIDoItem.module.scss';
import Title4 from '../Title4/Title4'
import Title5 from '../Title5/Title5'
import Paragraph3 from '../Paragraph3/Paragraph3'

const TasksIDoItem = ({index, title, text, price, priceDetail}) => {
  const rootClasses = index % 2 === 1 ?
                      [cl.root, cl.rootEven].join(' ') :
                      cl.root;

  return (
    <div className={rootClasses}>
      <p className={cl.root__index}>{index + 1}</p>
      <div className={cl.root__textBlock}>
        <div className={cl.root__titleAndText}>
          <Title5>{title}</Title5>
          <Paragraph3>{text}</Paragraph3>
        </div>
        <div className={cl.root__priceBlock}>
          <Title4>{price} ₽</Title4>
          {
            priceDetail ?
            <Paragraph3>/ {priceDetail}</Paragraph3> :
            ''
          }
        </div>
      </div>
    </div>
  );
};
export default TasksIDoItem;