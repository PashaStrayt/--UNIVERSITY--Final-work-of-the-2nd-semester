import React, { useMemo } from "react";
import cl from './ModalWindow.module.scss';
import Title3 from '../Title3/Title3';
import Title5 from '../Title5/Title5';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import BtnCancel from '../BtnCancel/BtnCancel';

const ModalWindow = ({modalWindowActive, setModalWindowActive, setMessageActive, name, setName}) => {
  let classes = useMemo(() => {
    console.log('useMemo отработал')
    return modalWindowActive ? [cl.root, cl.active].join(' ') : cl.root;
  }, [modalWindowActive]);

  const submitForm = e => {
    e.preventDefault();
    setModalWindowActive(false);
    setMessageActive(true);
  };

  const cancelForm = e => {
    e.preventDefault();
    setModalWindowActive(false);
  };

  return (
    <div className={classes}>
      <div className={cl.window}>
        <div className={cl.textBlock}>
          <Title3 additionalCSS={cl.Title3}>Обсудить проект</Title3>
          <Title5>Оставьте свою заявку и мы обсудим все детали ваших предложений</Title5>
        </div>
        <form className={cl.form}>
          <Input placeholder="Ваше имя..."
          value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="Электронная почта..." />
          <Input placeholder="Ваше предложение в кратце..." />
          <Textarea placeholder="Суть вашего предложения..." />
          <div className={cl.btnsBlock}>
            <BtnSubmit onClick={submitForm} />
            <BtnCancel onClick={cancelForm} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ModalWindow;