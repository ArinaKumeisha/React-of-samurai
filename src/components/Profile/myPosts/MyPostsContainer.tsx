import React from 'react';
import {addPostAC, changeTextAC, PostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux_store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    changeText: (newText: string) => void
}

export type MyPostPropsType = MapStatePropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeText: (newText: string) => {
            dispatch(changeTextAC(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
