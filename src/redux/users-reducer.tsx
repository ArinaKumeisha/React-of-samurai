import {ACTION_TYPE} from "./profile-reducer";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


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

type FollowAT = {
    type: ACTION_TYPE.FOLLOW_SUCCES
    userID: number
}

type UnFollowAT = {
    type: ACTION_TYPE.UN_FOLLOW_SUCCESS
    userID: number
}
type SetUsersAT = {
    type: ACTION_TYPE.SET_USERS
    users: UserType[]
}

type SetCurrentPageAT = {
    type: ACTION_TYPE.SET_CURRENT_PAGE
    currentPage: number
}

type SetTotalUserCountAT = {
    type: ACTION_TYPE.SET_TOTAL_USER_COUNT
    count: number
}

type ToggleIsFetchingAT = {
    type: ACTION_TYPE.TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleIsFollowingProgressAT = {
    type: ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS
    userId: number
    isFetching: boolean
}
export type UsersActionType = FollowAT |
    UnFollowAT |
    SetUsersAT |
    SetCurrentPageAT |
    SetTotalUserCountAT |
    ToggleIsFetchingAT |
    ToggleIsFollowingProgressAT

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export const initialState: InitialStateType = {
    users: [],
    pageSize: 10,   // количество userov на одной странице
    totalUsersCount: 20,  // сколько всего пользователей
    currentPage: 4,   // текущая страница которую просматриваем
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {

    switch (action.type) {
        case ACTION_TYPE.FOLLOW_SUCCES:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case ACTION_TYPE.UN_FOLLOW_SUCCESS:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case ACTION_TYPE.SET_USERS:
            return {...state, users: action.users}

        case ACTION_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case ACTION_TYPE.SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.count}

        case ACTION_TYPE.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}


export const followSucces = (userID: number): FollowAT => {    // функции AC
    return {
        type: ACTION_TYPE.FOLLOW_SUCCES,
        userID: userID,
    } as const
}

export const unFollowSuccess = (userID: number): UnFollowAT => {  // функции AC
    return {
        type: ACTION_TYPE.UN_FOLLOW_SUCCESS,
        userID: userID
    } as const
}

export const setUsers = (users: Array<UserType>): SetUsersAT => {  // функции AC
    return {
        type: ACTION_TYPE.SET_USERS,
        users: users

    } as const
}

export const setCurrentPage = (currentPage: number): SetCurrentPageAT => {  // функции AC
    return {
        type: ACTION_TYPE.SET_CURRENT_PAGE,
        currentPage,
    } as const
}
export const setTotalUserCount = (totalUsersCount: number): SetTotalUserCountAT => {  // функции AC
    return {
        type: ACTION_TYPE.SET_TOTAL_USER_COUNT,
        count: totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAT => {  // функции AC
    return {
        type: ACTION_TYPE.TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressAT => {
    return {
        type: ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
            })
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSucces(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}



