import {ACTION_TYPE} from "./profile-reducer";


export const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: true,
}
export type InitialStateSetUserType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
// export type InitialStateType = typeof initialState

type AuthActionType =
    ReturnType<typeof setAuthUserData>

export const authReducer = (state: InitialStateSetUserType = initialState ,  action: AuthActionType): InitialStateSetUserType => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: true,
            }

        default:
            return state
    }
}



export const setAuthUserData = (payLoad: InitialStateSetUserType) => {  // функции AC
    return {
        type: ACTION_TYPE.SET_USER_DATA,
        payLoad
        } as const
}


