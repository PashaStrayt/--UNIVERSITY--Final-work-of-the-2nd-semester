import React from "react";
import cl from './AboutMe.module.scss';
import avatar from './avatar.png'
import html from './html.svg'
import css from './css.svg'
import php from './php.svg'
import js from './js.svg'
import Title4 from "../Title4/Title4";
import Title5 from "../Title5/Title5";
import MyStackList from "../MyStackList/MyStackList";

const AboutMe = () => {
  return (
    <section className={cl.root}>
      <img src={avatar} className={cl.root__avatar} alt=""/>
      <div className={cl.root__desc}>
        <Title4>Привет, меня зовут Павел!</Title4>
        <Title5 additionalCSS={cl.root__Title5}>
          Я Full-Stack веб-разработчик с опытом более 15 лет.
        </Title5>
        <MyStackList
        stackList={[
          {
            text: 'Большой опыт в адаптивной, отзывчивой верстках. Любые задачи.',
            icon1: html,
            icon2: css,
            key: 'coding'
          },
          {
            text: 'Разработка Front-End, Back-End скриптов, настройка серверов и баз данных.',
            icon1: php,
            icon2: js,
            key: 'devolopment'
          }
        ]}
        />
      </div>
    </section>
  )
}
export default AboutMe