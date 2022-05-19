import React, { useState } from "react";
import MainSection from '../components/MainSection/MainSection';
import AboutMe from '../components/AboutMe/AboutMe';
import WhatCanIDo from "../components/WhatCanIDo/WhatCanIDo";
import IMakeEverything from "../components/IMakeEverything/IMakeEverything";
import Portfolio from "../components/Portfolio/Portfolio";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import MessageToUser from "../components/MessageToUser/MessageToUser";

const Home = () => {
  let [modalWindowActive, setModalWindowActive] = useState(false);
  let [messageActive, setMessageActive] = useState(false);
  const [name, setName] = useState('');

  return (
    <div>
      <MainSection setModalWindowActive={setModalWindowActive} />
      <AboutMe />
      <WhatCanIDo />
      <Portfolio />
      <IMakeEverything setModalWindowActive={setModalWindowActive} />
      <ModalWindow modalWindowActive={modalWindowActive} 
      setModalWindowActive={setModalWindowActive}
      setMessageActive={setMessageActive}
      name={name} setName={setName} />
      <MessageToUser messageActive={messageActive} setMessageActive={setMessageActive}>
        Спасибо, {name},<br></br> я свяжусь с вами в ближайшее время!
      </MessageToUser>
    </div>
  );
};
export default Home;