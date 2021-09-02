import React from 'react';
import {addPostAC, PostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux_store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: (newMessagePost: string) => void
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
        addPost: (newMessagePost: string) => {
            dispatch(addPostAC(newMessagePost))
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
