import React from "react";
import s from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

export const Dialogs = () => {
  return (
    <section className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name={"Alex"} className={"active"} id={1} />
        <DialogItem name={"Dimich"} className={"active"} id={2} />
        <DialogItem name={"Valera"} className={"active"} id={3} />
        <DialogItem name={"Victor"} className={"active"} id={4} />
        <DialogItem name={"Olga"} className={"active"} id={5} />
        {/*<div className={`${s.dialog} ${s.active}`}>*/}
        {/*  <NavLink to="dialogs/1">Alex</NavLink>*/}
        {/*</div>*/}
      </div>

      <div className={s.messages}>
        <Message message={"Hello))"} />
        <Message message={"How is your it-kamasutra?"} />
        <Message message={"Ha-ha-ha"} />
      </div>
    </section>
  );
};

type DialogItemType = {
  name: string;
  className: string;
  id: number;
};
const DialogItem = (props: DialogItemType) => {
  let path = "/dialogs/" + props.id;
  let clas = props.className;

  return (
    <div className={`${s.dialog} ${s.clas}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

type MessageType = {
  message: string;
};

const Message = (props: MessageType) => {
  return <div className={s.message}>{props.message}</div>;
};
