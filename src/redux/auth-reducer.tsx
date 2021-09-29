import {ACTION_TYPE} from "./profile-reducer";
import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux_store";
import { stopSubmit } from "redux-form";
import { SetAuthUserType } from "../types/types";


export const initialState = {
    id: '',
    email: null as string|null,
    login: null as string|null,
    isAuth: false,
    error: null,
    capchaUrl: null as string|null,
}
type InitialStateType = typeof initialState

export type AuthActionType = SetAuthUserDataSuccesType

export const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER_DATA_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

type SetAuthUserDataSuccesType = {
    type: ACTION_TYPE.SET_USER_DATA_SUCCESS,
    payload: SetAuthUserType
}
export const setAuthUserDataSucces = (id: string , email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataSuccesType => {  // функции AC
    return {
        type: ACTION_TYPE.SET_USER_DATA_SUCCESS,
        payload: {id, email, login, isAuth,}
    }
}
export const setAuthUserData = () => {
    return async (dispatch: any) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataSucces(id, email, login, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe,)
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}
export const logOut = () => async (dispatch: any) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataSucces('', null, null, false))
    }
}




