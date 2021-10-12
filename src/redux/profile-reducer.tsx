import {Dispatch} from "redux";
import {usersAPI, profileAPI} from "../api/api";
import {PostsType, ProfilesType} from "../types/types";

export enum ACTION_TYPE {
    ADD_POST = "ADD-POST",
    CHANGE_TEXT = "CHANGE-TEXT",
    SEND_MESSAGE = "SEND-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
    FOLLOW_SUCCES = "FOLLOW_SUCCES",
    UN_FOLLOW_SUCCESS = "UN_FOLLOW_SUCCESS",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USER_COUNT = "SET-TOTAL_USER_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING",
    SET_USER_PROFILE_SUCCESS = "SET_USER_PROFILE_SUCCESS",
    GET_USER_DATA_SUCCESS = "ACTION_TYPE.GET_USER_DATA_SUCCESS",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS_FOLLOWING-PROGRESS",
    SET_STATUS = "SET_STATUS",
    INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS",
}


export type ProfileActionType =
    AddPostAT |
    setUserProfileSuccessAT |
    SetStatusAT

export type InitialStateType = typeof initialState

let initialState = {
    profile: null as ProfilesType | null,
    status: '',
    newPostText: '',
    posts: [
        {
            id: 2,
            message: "Hello, how are you?",
            likeCount: 15,
            img: "https://www.fotoprizer.ru/img_inf/st_221.jpg"
        },
        {
            id: 1,
            message: "It's my first post",
            likeCount: 18,
            img: "https://www.fotoprizer.ru/img_inf/st_221.jpg"
        },
    ] as Array<PostsType>,
}
export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newMessagePost,
                likeCount: 0,
                img: "https://www.fotoprizer.ru/img_inf/st_221.jpg",
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case ACTION_TYPE.SET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile
            }
        case ACTION_TYPE.SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}
export type AddPostAT = {
    type: ACTION_TYPE.ADD_POST,
    newMessagePost: any
}
export type setUserProfileSuccessAT = {
    type: ACTION_TYPE.SET_USER_PROFILE_SUCCESS,
    profile: ProfilesType | null
}
export type SetStatusAT = {
    type: ACTION_TYPE.SET_STATUS,
    status: string,
}

export const addPostAC = (newMessagePost: string): AddPostAT => {
    return {
        type: ACTION_TYPE.ADD_POST,
        newMessagePost,
    } as const
}

export const setStatusAC = (status: string): SetStatusAT => {
    return {
        type: ACTION_TYPE.SET_STATUS,
        status,
    } as const
}
export const setUserProfileSuccess = (profile: ProfilesType | null) => {
    return {
        type: ACTION_TYPE.SET_USER_PROFILE_SUCCESS,
        profile,
    } as const
}
export const setUserProfile = (userId: string) => async (dispatch: Dispatch<ProfileActionType>) => {
    try {
        const res = await profileAPI.getUserProfile(userId)

        dispatch(setUserProfileSuccess(res.data))
    } catch (e) {
        throw new Error
    }
}
export const getUserStatus = (userId: string) => async (dispatch: Dispatch<ProfileActionType>) => {
    try {
        const res = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(res.data))
    } catch (e) {
        throw new Error
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}


