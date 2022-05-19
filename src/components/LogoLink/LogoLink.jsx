import React from "react";
import cl from './LogoLink.module.scss';
import img from './logo.svg';
import { Link } from "react-router-dom";

const LogoLink = ({additionalCSS}) => {
  return (
    <Link to="/home" className={[cl.root, additionalCSS].join(' ')}>
      <img src={img} alt="" className={cl.root__img}/>
      <p className={cl.root__link}>SHULIKOV.COM<br></br>Design / Code / Animate</p>
    </Link>
  );
};
export default LogoLink;