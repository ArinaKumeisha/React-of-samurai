/*import React from 'react';*/
// reducer принимает часть стэйта и action, у которого как минимум есть type
//  и возвращает преобразованный state


import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
    SET_USER_DATA_SUCCESS = "SET_USER_DATA_SUCCESS",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS_FOLLOWING-PROGRESS"
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
    img: string
}
export type AddPostAT = {
    type: ACTION_TYPE.ADD_POST
}
export type ChangeTextAT = {
    type: ACTION_TYPE.CHANGE_TEXT,
    newText: string
}
export type setUserProfileSuccessAT = {
    type: ACTION_TYPE.SET_USER_PROFILE_SUCCESS,
    profile: any
}


export type ProfileActionType =
    AddPostAT |
    ChangeTextAT |
    setUserProfileSuccessAT


// можно типизировать так
// export type ActionsType =
//     ReturnType<typeof changeTextareaAC> |
//     ReturnType<typeof upDateNewMessageTextAC> |
//     ReturnType<typeof sendMessageAC> |
//     ReturnType<typeof followAC> |
//     ReturnType<typeof unFollowAC> |
//     ReturnType<typeof setUsersAC> |
//     ReturnType<typeof setCurrentPageAC> |
//     ReturnType<typeof setTotalUserCountAC>

export type InitialStateType = typeof initialState

let initialState = {
    newPostText: "",
    profile: null,
    /*profile: {
        "aboutMe": "",
        userId: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: { small: "", large: "" }
    },*/
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
                message: state.newPostText,
                likeCount: 0,
                img: "https://www.fotoprizer.ru/img_inf/st_221.jpg",
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            }
        case ACTION_TYPE.CHANGE_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ACTION_TYPE.SET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
export const addPostAC = (): AddPostAT => {
    return {
        type: ACTION_TYPE.ADD_POST,
    } as const
}

export const changeTextAC = (newText: string): ChangeTextAT => {
    return {
        type: ACTION_TYPE.CHANGE_TEXT,
        newText,
    } as const
}
export const setUserProfileSuccess = (profile: any) => {
    return {
        type: ACTION_TYPE.SET_USER_PROFILE_SUCCESS,
        profile
    } as const
}
export const setUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionType>) =>{
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfileSuccess(response.data))
            })
    }
    }


