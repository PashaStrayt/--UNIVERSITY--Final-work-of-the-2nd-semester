import React from "react";
import cl from './SocialLinks.module.scss';
import vk from './vk.svg';
import telegram from './telegram.svg';
import youtube from './youtube.svg';

const SocialLinks = () => {
  return (
    <div className={cl.root}>
      <a href="https://vk.com/pashastrayt">
        <img src={vk} alt="" />
      </a>
      <a href="https://t.me/ulbi_tv">
        <img src={telegram} alt="" />
      </a>
      <a href="https://www.youtube.com/c/BerlogaStudio">
        <img src={youtube} alt="" />
      </a>
    </div>
  );
};
export default SocialLinks;