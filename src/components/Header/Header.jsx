import React from "react";
import LogoLink from '../LogoLink/LogoLink';
import NavBar from '../NavBar/NavBar';
import cl from './Header.module.scss';

const Header = () => {
  return (
    <header className={cl.root}>
      <LogoLink additionalCSS={cl.root__LogoLink}/>
      <NavBar additionalCSS={cl.root__NavBar}/>
    </header>
  );
};
export default Header;