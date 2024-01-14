import React from "react";
import s from "./Dialogs.module.scss";

export const Dialogs = () => {
  return (
    <section className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={`${s.dialog} ${s.active}`}>Alex</div>
        <div className={s.dialog}>Dimych</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Victor</div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>Hello))</div>
        <div className={s.message}>How is your it-kamasutra?</div>
        <div className={s.message}>Ha-ha-ha</div>
      </div>
    </section>
  );
};
