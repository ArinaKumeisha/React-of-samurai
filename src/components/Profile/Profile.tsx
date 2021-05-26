import React from 'react';
/*import s from "./Profile.module.css"*/
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type PropsType = {
    addPost: (postMessage:string) => void
    posts: Array<PostsType>
}

const Profile = (props:PropsType) => {
    return (

        < div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;
