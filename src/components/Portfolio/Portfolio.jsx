import React, { useState} from "react";
import BtnsFilterList from "../BtnsFilterList/BtnsFilterList";
import Title2 from "../Title2/Title2";
import WorksList from "../WorksList/WorksList";
import cl from './Portfolio.module.scss';

const Portfolio = () => {
  const [sortMethod, setSortMethod] = useState('');
  const btnsList = 
    ['Все работы', 'Скрипты', 'Верстка', 'Интерактивные плакаты', 'Разное'];

  const LiftingSortMethodUp = (sortMethod) => {
    setSortMethod(sortMethod);
  };

  return (
    <section className={cl.root}>
      <Title2>Мое портфолио</Title2>
      <BtnsFilterList btnsList={btnsList} LiftingSortMethodUp={LiftingSortMethodUp}/>
      <WorksList sortMethod={sortMethod}/>
    </section>
  );
};
export default Portfolio;