import {ACTION_TYPE} from "./profile-reducer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


export const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
export type InitialStateSetUserType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type AuthActionType =
    ReturnType<typeof setAuthUserDataSucces>

export const authReducer = (state: InitialStateSetUserType = initialState, action: AuthActionType): InitialStateSetUserType => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER_DATA_SUCCESS:
            return {
                ...state,
                ...action.payLoad,
                isAuth: true,
            }

        default:
            return state
    }
}


export const setAuthUserDataSucces = (payLoad: InitialStateSetUserType) => {  // функции AC
    return {
        type: ACTION_TYPE.SET_USER_DATA_SUCCESS,
        payLoad
    } as const
}

export const setAuthUserData = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataSucces(response.data.data))
                }
            })
    }
}




