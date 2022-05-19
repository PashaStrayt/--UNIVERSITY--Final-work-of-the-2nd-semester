import React from "react";
import Title1 from "../../components/Title1/Title1";
import cl from './Error.module.scss';

const Error = () => {
  return (
    <div>
      <Title1 additionalCSS={cl.root}>Такой страницы не существует</Title1>
    </div>
  );
};
export default Error;