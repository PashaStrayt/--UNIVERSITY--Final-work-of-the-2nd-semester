import React from "react";
import LogoLink from '../LogoLink/LogoLink';
import SubscribeEmail from '../SubscribeEmail/SubscribeEmail';
import SocialLinks from '../SocialLinks/SocialLinks';
import NavBar from '../NavBar/NavBar';
import cl from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cl.root}>
      <div className={cl.LogoLinkAndSubscribeEmail}>
        <LogoLink additionalCSS={cl.LogoLink}/>
        <SubscribeEmail />
      </div>
      <div className={cl.SocialLinksAndNavBar}>
        <SocialLinks />
        <NavBar additionalCSS={cl.NavBar}/>
      </div>
    </footer>
  );
};
export default Footer;