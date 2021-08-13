import React from 'react';
import {InitialStateType, sendMessageAC, upDateNewMessageTextAC} from "../../redux/dialogs-reduser";
import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Dialogs from "./Dialogs";


export type MapStatePropsType = {
    dialogsPage: InitialStateType
}
export type MapDispatchPropsType = {
    changeNewMessage: (newMessage: string) => void
    sendNewMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {   // AppStateType это type всего нашего state!!! и возвращает частичку state из редьюсера
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {   //dispatch импортируем из redux
    return {
        changeNewMessage: (newMessage: string) => {
            dispatch(upDateNewMessageTextAC(newMessage))    //диспатчим action
        },
        sendNewMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer

// Dialogs мы оборачиваем компонентой-контейнером DialogsContainer, все свойства и callbacks попадут через пропсы в
// Dialogs, мы должны их туда прокинуть


