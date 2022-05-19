import React from "react";
import cl from './BtnDiscussProject.module.scss';

const BtnDiscussProject = ({additionalCSS, setModalWindowActive}) => {
  return (
    <button 
    className={[cl.root, additionalCSS].join(' ')}
    onClick={() => setModalWindowActive(true)}
    >
      Обсудить проект
    </button>
  );
};
export default BtnDiscussProject;