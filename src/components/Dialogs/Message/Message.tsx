import React from 'react';
import s from "./../Dialogs.module.css"
import {MessagesType} from "../../../redux/dialogs-reduser";


const Message = (props: MessagesType) => {
    return <div className={s.dialog}>
        {props.message}</div>
}


export default Message;

