import React from "react";
import TasksIDoItem from "../TasksIDoItem/TasksIDoItem";
import cl from './TasksIDoList.module.scss';

const TasksIDoList = ({tasksList}) => {
  return (
    <div className={cl.root}>
      {tasksList.map((item, index) =>
        <TasksIDoItem
        index={index}
        title={item.title}
        text={item.text}
        price={item.price}
        priceDetail={item?.priceDetail}
        key={item.price}
        />
      )}
    </div>
  )
}
export default TasksIDoList