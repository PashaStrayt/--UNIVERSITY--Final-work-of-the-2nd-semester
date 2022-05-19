import React, { useMemo } from "react";
import Title5 from "../Title5/Title5";
import cl from './MessageToUser.module.scss';

const MessageToUser = ({children, messageActive, setMessageActive}) => {
  let classes = useMemo(() => {
    if (messageActive) setTimeout(() => setMessageActive(false), 3000);
    return messageActive ? [cl.root, cl.active].join(' ') : cl.root;
  }, [messageActive]);

  return (
    <div className={classes}>
      <Title5>{children}</Title5>
    </div>
  );
};
export default MessageToUser;