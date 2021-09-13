import {ACTION_TYPE} from "./profile-reducer";
import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux_store";


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

export type AuthActionType =
    ReturnType<typeof setAuthUserDataSucces>

export const authReducer = (state: InitialStateSetUserType = initialState, action: AuthActionType): InitialStateSetUserType => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER_DATA_SUCCESS:
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }

        default:
            return state
    }
}
export const setAuthUserDataSucces = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {  // функции AC
    return {
        type: ACTION_TYPE.SET_USER_DATA_SUCCESS, id, email, login, isAuth
    } as const
}

export const setAuthUserData = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.me()
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDataSucces(id, email, login, true))
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, AuthActionType> => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe,)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData())
                }
            })
    }
}

export const logOut = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataSucces(null, null, null, false))
                }
            })
    }
}




