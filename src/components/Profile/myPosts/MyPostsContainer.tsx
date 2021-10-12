import React from 'react';
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux_store";
import {Dispatch} from "redux";
import { PostsType } from '../../../types/types';
import {getPosts} from '../../../redux/select'


type MapStatePropsType = {
    posts: Array<PostsType>
}

type MapDispatchToPropsType = {
    addPost: (newMessagePost: string) => void
}

export type MyPostPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: getPosts(state),
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
