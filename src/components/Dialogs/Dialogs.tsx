import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";


export function Dialogs(props: DialogsPropsType) {

    const changeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessage(e.currentTarget.value)
    }

    const sendMessageHandler = () => {
        props.sendNewMessage()
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem
            key={d.id}
            name={d.name}
            id={d.id}
            img={d.img}/>)
    let messagesElements = props.dialogsPage.messages.map(m =>
        <Message
            message={m.message}
            key={m.id}
            id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <textarea
                    value={props.dialogsPage.newMessageText}
                    placeholder="Enter your message"
                    onChange={changeNewMessageHandler}/>

                <button onClick={sendMessageHandler}>send</button>
            </div>
        </div>


    )
}

export default Dialogs;

