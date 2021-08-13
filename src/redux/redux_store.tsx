import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reduser";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


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
})

export type AppStateType=ReturnType<typeof rootReducer>   //  ReturnType -> дай мне  возвращаемый тип rootReducera
export let store = createStore(rootReducer)

//@ts-ignore
window.store = store.getState()

