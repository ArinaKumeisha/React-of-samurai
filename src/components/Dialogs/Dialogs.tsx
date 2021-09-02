import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form';


export function Dialogs(props: DialogsPropsType) {

    let addNewMessageBody = (data: any) => {
        props.sendNewMessage(data.newMessageBody)
    }
    return (
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
                <AddMessageReduxForm onSubmit={addNewMessageBody}/>
            </div>
        </div>
    )
}

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter uour message'}
                   name='newMessageBody'
                   component={'textarea'}
                   type={'text'}/>
            <button>Send</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({
    form: 'dialogs'
})(AddMessageForm)

export default Dialogs;

