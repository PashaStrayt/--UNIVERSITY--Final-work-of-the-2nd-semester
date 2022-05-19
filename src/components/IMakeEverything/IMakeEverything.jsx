import React from "react";
import Title2 from "../Title2/Title2";
import Title5 from "../Title5/Title5";
import BtnDiscussProject from "../BtnDiscussProject/BtnDiscussProject";
import cl from './IMakeEverything.module.scss';
import img from './img.svg';

const IMakeEverything = ({setModalWindowActive}) => {
  return (
    <section className={cl.root}>
      <Title2 additionalCSS={cl.Title2}>Исполню ваши задачи быстро и качественно</Title2>
      <Title5 additionalCSS={cl.Title5}>
        Вы постоянный клиент?<br></br>Скидка постоянным клиентам до 50%
      </Title5>
      <BtnDiscussProject additionalCSS={cl.btn} setModalWindowActive={setModalWindowActive}/>
      <img src={img} alt="" className={cl.img} />
    </section>
  );
};
export default IMakeEverything;