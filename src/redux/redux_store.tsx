import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {NewReducer} from "../components/New/new-reducer";
import { appReducer } from "./app-reducer";

/*export type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeTextareaAC> |
    ReturnType<typeof upDateNewMessageTextAC> |
    ReturnType<typeof sendMessageAC>*/

let rootReducer = combineReducers({              //rootReducer возвращает state
    profilePage: profileReducer,  //это наш целый стэйт
    dialogsPage: dialogsReducer,  // ключ: значение
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    new: NewReducer,
    app: appReducer,
})

export type AppStateType=ReturnType<typeof rootReducer>   //  ReturnType -> дай мне  возвращаемый тип rootReducera
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
//@ts-ignore
window.store = store

