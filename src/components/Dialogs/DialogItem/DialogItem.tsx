import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./../Dialogs.module.css"
import {DialogsType} from "../../../redux/state";


const DialogItem = (props: DialogsType) => {

    return (
    <div className={s.dialog + " " + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name} <img src={props.img}/></NavLink>
    </div>
        )
}


export default DialogItem;

