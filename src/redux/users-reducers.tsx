import {ActionsType} from "./profile-reducer";


export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string,
        large: string
    },
    followed: boolean
   /* location: { country: string, city: string }*/
}
export type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType=> {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


    export const followAC = (userID: number) => {
        return {
            type: "FOLLOW",
            userID: userID
        } as const
    }

    export const unFollowAC = (userID: number) => {
        return {
            type: "UNFOLLOW",
            userID: userID
        } as const
    }

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users: users

    } as const
}

