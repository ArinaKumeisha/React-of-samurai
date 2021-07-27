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

}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export const initialState: InitialStateType = {
    users: [],
    pageSize: 10,   // количество userov на одной странице
    totalUsersCount: 20,  // сколько всего пользователей
    currentPage: 4   // текущая страница которую просматриваем
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL_USER_COUNT":
            return {...state, totalUsersCount: action.count}
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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage,
    } as const
}
export const setTotalUserCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL_USER_COUNT",
       count: totalUsersCount
    } as const
}

