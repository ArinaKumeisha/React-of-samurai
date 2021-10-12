import {ACTION_TYPE} from "./profile-reducer";
import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux_store";
import { stopSubmit } from "redux-form";
import { GetAuthUserType } from "../types/types";


export const initialState = {
    id: '',
    email: null as string|null,
    login: null as string|null,
    isAuth: false,
    error: null,
    capchaUrl: null as string|null,
}
type InitialStateType = typeof initialState

export type AuthActionType = GetAuthUserDataSuccesType

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

type GetAuthUserDataSuccesType = {
    type: ACTION_TYPE.SET_USER_DATA_SUCCESS,
    payload: GetAuthUserType
}
export const getAuthUserDataSucces = (id: string , email: string | null, login: string | null, isAuth: boolean): GetAuthUserDataSuccesType => {  // функции AC
    return {
        type: ACTION_TYPE.SET_USER_DATA_SUCCESS,
        payload: {id, email, login, isAuth,}
    }
}
export const getAuthUserData = () => {
    return async (dispatch: any) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(getAuthUserDataSucces(id, email, login, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe,)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}
export const logOut = () => async (dispatch: any) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataSucces('', null, null, false))
    }
}




