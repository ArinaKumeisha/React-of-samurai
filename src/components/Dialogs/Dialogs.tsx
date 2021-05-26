import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import state, {DialogsPageType} from "../../redux/state";


export function Dialogs(props:DialogsPageType){

    let dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}
                   img={d.img}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;

