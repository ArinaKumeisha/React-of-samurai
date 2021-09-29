import {Dispatch} from "redux"
import {setAuthUserData} from "./auth-reducer"
import {ACTION_TYPE} from "./profile-reducer"

type InitialStateType = typeof initialState
const initialState = {
    inicialized: false
}
export const appReducer = (state: InitialStateType= initialState, action: InicializedAT): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.INITIALIZED_SUCCESS:
            return {...state, inicialized: false}

        default:
            return state
    }
}
type InicializedAT = ReturnType<typeof inicializedAC>

export const inicializedAC = () => {
    return {
        type: ACTION_TYPE.INITIALIZED_SUCCESS
    }
}

export const inicializedApp = () =>  (dispatch: any) => {
    let promise = dispatch(setAuthUserData())
    promise.then(() => dispatch(inicializedAC()))
}

