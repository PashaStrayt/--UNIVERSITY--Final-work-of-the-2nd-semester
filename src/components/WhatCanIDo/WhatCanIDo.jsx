import React from "react";
import TasksIDoList from "../TasksIDoList/TasksIDoList";
import Title2 from "../Title2/Title2";
import cl from './WhatCanIDo.module.scss';

const WhatCanIDo = () => {
  return (
    <section className={cl.root}>
      <Title2 additionalCSS={cl.Title2}>Подробнее о том, что я могу сделать для вас</Title2>
      <TasksIDoList
      tasksList={
        [
          {
            title: 'ДИЗАЙН / ВЕРСТКА САЙТА ИЛИ ОТДЕЛЬНЫХ СТРАНИЦ',
            text: `Индивидуальное решение под ваши бизнес задачи.
                   Дизайн на основе готового прототипа
                   или вашего тех. задания.
                   Адаптивный дизайн сайтов для мобильных устройств.`,
            price: 1499
          },
          {
            title: `ВЕРСТКА И ПРОГРАММИРОВАНИЕ`,
            text: `Адаптивная верстка под все стандарты разрешений
                   (1400px, 1000px, 768px, 320px). 
                   Написание скриптов на JS, React JS, TypeScript для
                   работы клиентской стороны вашего сайта.`,
            price: 499,
            priceDetail: 'за страницу'
          },
          {
            title: 'ПРОГРАММИРОВАНИЕ СЕРВЕРНОЙ СТОРОНЫ',
            text: `Back-End программирование вашего сайта
                   на любых из следующих языков
                   (PHP, Go, Swift, C++, Java, Node JS, Python).
                   Разработка скриптов для Tilda.
                   Настройка и создание инструментов управления для баз данных.`,
            price: 1999
          }
        ]
      }
      />
    </section>
  );
};
export default WhatCanIDo;