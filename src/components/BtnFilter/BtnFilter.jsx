import React, { useMemo} from "react";
import cl from './BtnFilter.module.scss';

const BtnFilter = ({children, activeBtn, ...props}) => {
  let rootClasses = useMemo(() => {
    return (
      activeBtn === children ?
      [cl.root, cl.active].join(' ') :
      cl.root);
  }, [activeBtn]);

  return (
    <button className={rootClasses} {...props}>{children}</button>
  );
};
export default BtnFilter;