import React, { useState } from "react";
import cl from './BtnsFilterList.module.scss';
import BtnFilter from '../BtnFilter/BtnFilter';

const BtnsFilterList = ({btnsList, LiftingSortMethodUp}) => {
  let [activeBtn, setActiveBtn] = useState('Все работы');

  return (
    <div className={cl.root}>
      {
        btnsList.map(item =>
          <BtnFilter
          onClick={() => {setActiveBtn(item); LiftingSortMethodUp(item)}}
          activeBtn={activeBtn}
          key={item}
          >
            {item}
          </BtnFilter>
        )
      }
    </div>
  );
};
export default BtnsFilterList;