import {Dispatch} from "redux"
import {getAuthUserData} from "./auth-reducer"
import {ACTION_TYPE} from "./profile-reducer"

type InitialStateType = typeof initialState
const initialState = {
    inicialized: false
}
export const appReducer = (state: InitialStateType= initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.INITIALIZED_SUCCESS:
            return {...state, inicialized: true}
        default:
            return state
    }
}
type InicializedAT = ReturnType<typeof inicializedAC>
type ActionsType = InicializedAT

export const inicializedAC = () => {
    return {
        type: ACTION_TYPE.INITIALIZED_SUCCESS,
    }
}

export const inicializedApp = () =>  (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(inicializedAC())
    })
}

