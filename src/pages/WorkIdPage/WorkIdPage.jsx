import React, { useEffect, useState } from "react";
import Title2 from "../../components/Title2/Title2";
import Title5 from "../../components/Title5/Title5";
import cl from './WorkIdPage.module.scss';
import WorksService from "../../API/WorksService";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

const WorkIdPage = () => {
  const params = useParams();
  const [currentWork, setCurrentWork] = useState({});

  const fetchWork = async() => {
    const response = await WorksService.getALL(
      {name: 'title', value: params.title}
    );
    setCurrentWork(response[0]);
  };

  useEffect(() => {fetchWork()}, []);

  return (
    <section className={cl.root}>
      <Title2>{currentWork.title}</Title2>
      <Title5 additionalCSS={cl.Title5}>{currentWork.category}</Title5>
      {
        currentWork?.images ?
        <Slider images={currentWork.images}/> :
        ''
      }
    </section>
  );
};
export default WorkIdPage;