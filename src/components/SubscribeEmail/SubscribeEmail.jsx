import React from "react";
import cl from './SubscribeEmail.module.scss';
import Title4 from '../Title4/Title4';
import InputEmail from '../InputEmail/InputEmail';

const SubscribeEmail = () => {
  return (
    <div className={cl.root}>
      <Title4>ПОДПИСАТЬСЯ НА ОБНОВЛЕНИЯ</Title4>
      <InputEmail />
    </div>
  );
};
export default SubscribeEmail;