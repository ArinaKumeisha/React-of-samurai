import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from 'react-router-dom'


export function Dialogs(props: DialogsPropsType) {

    const changeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessage(e.currentTarget.value)
    }

    const sendMessageHandler = () => {
        props.sendNewMessage()
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.dialogsPage.dialogs.map(d => {
                        return (
                            <div className={s.dialog + " " + s.active}>
                                {d.name}
                                <img src={d.img}/>
                            </div>)
                    })}

            </div>
            <div className={s.messages}>
                {
                    props.dialogsPage.messages.map(m => {
                        return (
                            <div key={m.id}
                                 className={s.dialog}>
                                {m.message}
                            </div>)
                    })}

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

