import React, { useState, useMemo, useEffect } from "react";
import cl from './WorksList.module.scss';
import WorksService from '../../API/WorksService';
import WorksItem from '../WorksItem/WorksItem';

const WorksList = ({sortMethod}) => {
  const [works, setWorks] = useState([]);
  const [worksAll, setWorksAll] = useState([]);

  async function fetchWorks() {
    const response = await WorksService.getALL();
    setWorks(response);
    setWorksAll(response);
  }

  useEffect(() => {fetchWorks()}, []);

  const sortWorks = (sortMethod) => {
    if (sortMethod === 'Все работы') return worksAll;
    return worksAll.filter(item => item.category === sortMethod);
  }

  useMemo(() => setWorks(sortWorks(sortMethod)), [sortMethod]);

  return (
    <div className={cl.root}>
      {
        works.map(item =>
          <WorksItem
          title={item.title}
          body={item.body}
          preview={item.preview}
          key={item.title}
          />
        )
      }
    </div>
  );
};
export default WorksList;