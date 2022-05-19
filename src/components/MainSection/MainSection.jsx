import React from "react";
import Title1 from '../Title1/Title1';
import Paragraph1 from '../Paragraph1/Paragraph1';
import BtnDiscussProject from '../BtnDiscussProject/BtnDiscussProject';
import img from './img.png';
import cl from './MainSection.module.scss';

const MainSection = ({setModalWindowActive}) => {
  return (
    <section className={cl.root}>
      <Title1 additionalCSS={cl.root__title}>Создание сайтов с нуля</Title1>
      <Paragraph1 additionalCSS={cl.root__paragraph}>Front-End / Back-End разработка</Paragraph1>
      <BtnDiscussProject additionalCSS={cl.root__btn} setModalWindowActive={setModalWindowActive}/>
      <img src={img} alt="" className={cl.root__img}/>
    </section>
  );
};
export default MainSection;