import React from "react";
import Link from "../Link/Link";
import BtnServices from "../BtnServices/BtnServices";
import cl from './NavBar.module.scss';

const NavBar = ({additionalCSS}) => {
  return (
    <nav className={[cl.root, additionalCSS].join(' ')}>
      <Link>Обо мне</Link>
      <Link>Портфолио</Link>
      <Link>Контакты</Link>
      <BtnServices />
    </nav>
  );
};
export default NavBar;