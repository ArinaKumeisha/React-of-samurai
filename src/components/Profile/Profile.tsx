import React from 'react';
/*import s from "./Profile.module.css"*/
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeText, PostsType, ProfilePageType} from "../../redux/state";

type PropsType = {
    addPost: (postMessage: string) => void
    changeText: (newText: string) => void
    posts: Array<PostsType>
    newPostText: string

}

const Profile = (props: PropsType) => {
    return (

        < div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     changeText={props.changeText}
            />
        </div>
    )
}
export default Profile;
