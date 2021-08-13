import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./../Dialogs.module.css"
import {DialogsType} from "../../../redux/dialogs-reduser";



const DialogItem = (props: DialogsType) => {

    return (
    <div className={s.dialog + " " + s.active}>
        {props.name}<img src={props.img}/></div>
        )
}


export default DialogItem;

