import {sendMessageAC, upDateNewMessageTextAC,} from "./dialogs-reduser";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC
} from "./users-reducers";


// reducer принимает часть стэйта и action, у которого как минимум есть type
//  и возвращает преобразованный state
export type PostsType = {
    id: number
    message: string
    likeCount: number
    img: string
}

export type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeTextareaAC> |
    ReturnType<typeof upDateNewMessageTextAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followAC>|
    ReturnType<typeof unFollowAC>|
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUserCountAC>

type InitialStateType = typeof initialState

let initialState = {
    newPostText: "",
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

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
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


        case "CHANGE-NEW-TEXT-CALLBACK":
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}
export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const changeTextareaAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT-CALLBACK",
        newText: newText
    } as const
}



