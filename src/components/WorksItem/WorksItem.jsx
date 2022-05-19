import React, { useEffect, useMemo, useState } from "react";
import Title4 from "../Title4/Title4";
import Paragraph4 from "../Paragraph4/Paragraph4";
import cl from './WorksItem.module.scss';
import { useNavigate } from "react-router-dom";

const WorksItem = ({ title, body, preview }) => {
  const navigate = useNavigate();
  let [width, setWidth] = useState(window.innerWidth);
  let style = useMemo(() => {
    return window.innerWidth > 600 ?
      { background: `#FCCD9C no-repeat url(${preview}) center` } :
      { background: `#FCCD9C no-repeat url(${preview}) center 15px / 270px` };
  }, [width]);

  useEffect(() =>
    window.addEventListener('resize', () => setWidth(window.innerWidth)), []);

  return (
    <div className={cl.root} style={style}>
      <Title4 additionalCSS={cl.Title4}>{title}</Title4>
      <Paragraph4 additionalCSS={cl.Paragraph4}>{body}</Paragraph4>
      <button
        onClick={() => navigate(`/works/${title}`)}
        className={cl.openWorkBtn}
      >
        <Title4 additionalCSS={cl.openWorkBtn__Title4}>Открыть полностью</Title4>
      </button>
    </div>
  );
};
export default WorksItem;